import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Bid } from "../model/bid.model.js";
import { Gig } from "../model/gig.model.js";

const createBid = asyncHandler(async(req, res)=>{
  const {gigId, message, proposedPrice} = req.body;
  const freelancerId = req.user._id;

  if([gigId, message, proposedPrice].some((field)=>field.trim() === "")){
    throw new ApiError(400, "All the fields are required");
  }

  if(!freelancerId){
    throw new ApiError(404, "Freelancer Id was not received");
  }

  const createdBid = await Bid.create({
    gigId,
    freelancerId,
    message,
    proposedPrice,
    status:"pending"
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      createdBid,
      "New Bid created successfully"
    )
  )
})

const updateBid = asyncHandler(async(req, res)=>{
  const {bidId, gigId, message, proposedPrice} = req.body;
  const freelancerId = req.user._id;

  if([gigId, message, proposedPrice].some((field)=>field.trim() === "")){
    throw new ApiError(400, "All the fields are required");
  }

  if(!freelancerId){
    throw new ApiError(404, "Freelancer Id was not received");
  }

  const updatedBid = await Bid.findByIdAndUpdate(bidId, 
    {
      gigId,
      freelancerId,
      message,
      proposedPrice,
      status:"pending"
    },
    {new : true}
  )

  return res.status(200).json(
    new ApiResponse(
      200,
      updateBid,
      "Bid updated Successfully"
    )
  )
})

const deleteBid = asyncHandler(async(req, res)=>{
  const {bidId} = req.body;

  const deletedBid = await Bid.findByIdAndDelete(bidId);

  if(!deletedBid){
    throw new ApiError(500, "Unable to delete the bid");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      deletedBid,
      "Bid deleted successfully"
    )
  )
})

const getUserBid = asyncHandler(async(req, res)=>{
  const freelancerId = req.user._id;

  const bidsByUser = await Bid.find({freelancerId: freelancerId}).populate("gidId", "title description slug budget");

  if(!bidsByUser){
    throw new ApiError(404, "No bids has been posted by the user");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      bidsByUser,
      "Bids posted by user found successfully"
    )
  )
})

const getGigBid = asyncHandler(async(req, res)=>{
  const gigId = req.params.gigId;
  const userId = req.user._id;

  const gig = await Gig.findById(gigId);

  if(!gig){
    throw new ApiError(404, "Gig not found");
  }

  if (gig.ownerId.toString() !== userId.toString()) {
    throw new ApiError(403, "Access denied. Only the gig owner can view bids");
  }

  const bidsForGig = await Bid.find({gigId: gigId});

  if(!bidsForGig){
    throw new ApiError(404, "No bid found for the gig");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      bidsForGig,
      "All the bids for the gig fetched successfully"
    )
  )
})

export {createBid, updateBid, deleteBid, getUserBid, getGigBid}