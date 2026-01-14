import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useAuth from "../context/authContext";
import { getGigById, createBid } from "../service/service";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const GigDetails = () => {
  const { gigId } = useParams();
  const navigate = useNavigate();
  const { user, isLoggedIn } = useAuth();

  const [gig, setGig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showBidForm, setShowBidForm] = useState(false);
  const [bidFormData, setBidFormData] = useState({
    message: "",
    proposedPrice: "",
  });
  const [bidLoading, setBidLoading] = useState(false);
  const [bidError, setBidError] = useState("");

  useEffect(() => {
    fetchGigDetails();
  }, [gigId]);

  const fetchGigDetails = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await getGigById(gigId);
      setGig(response.data);
    } catch (err) {
      console.error("Error fetching gig details:", err);
      setError(err.response?.data?.message || "Failed to load gig details");
    } finally {
      setLoading(false);
    }
  };

  const handleBidSubmit = async (e) => {
    e.preventDefault();

    if (!bidFormData.message || !bidFormData.proposedPrice) {
      setBidError("Please fill all fields");
      return;
    }

    if (bidFormData.message.trim().length < 20) {
      setBidError("Message must be at least 20 characters long");
      return;
    }

    if (Number(bidFormData.proposedPrice) <= 0) {
      setBidError("Proposed price must be greater than 0");
      return;
    }

    try {
      setBidLoading(true);
      setBidError("");
      await createBid(gigId, bidFormData.message, Number(bidFormData.proposedPrice));
      setBidFormData({ message: "", proposedPrice: "" });
      setShowBidForm(false);
      alert("Bid submitted successfully!");
    } catch (err) {
      console.error("Error submitting bid:", err);
      setBidError(err.response?.data?.message || "Failed to submit bid");
    } finally {
      setBidLoading(false);
    }
  };

  const isOwner = user && gig && user._id === gig.ownerId?._id;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bone">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bone px-6">
        <ErrorMessage message={error} />
        <Link to="/gigs" className="mt-4 text-royal-blue hover:text-powder-blue font-semibold">
          Back to Browse
        </Link>
      </div>
    );
  }

  if (!gig) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bone px-6">
        <p className="text-royal-blue text-lg mb-4">Gig not found</p>
        <Link to="/gigs" className="text-royal-blue hover:text-powder-blue font-semibold">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 bg-bone py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/gigs" className="inline-flex items-center text-royal-blue hover:text-powder-blue mb-6 font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Browse
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-powder-blue">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <span className="bg-powder-blue text-royal-blue px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                  {gig.status === "open" ? "Open" : gig.status === "assigned" ? "Assigned" : "Closed"}
                </span>
                <h1 className="text-4xl font-bold text-royal-blue mb-4">
                  {gig.title}
                </h1>
                <div className="flex items-center space-x-4 text-royal-blue opacity-80">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Posted by <strong>{gig.ownerId?.name || 'Unknown'}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Posted {new Date(gig.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="bg-powder-blue rounded-xl p-6 text-center">
                <p className="text-sm text-royal-blue opacity-80 mb-2">Budget</p>
                <p className="text-4xl font-bold text-royal-blue">${gig.budget}</p>
              </div>
            </div>

            <div className="border-t-2 border-powder-blue pt-6">
              <h2 className="text-2xl font-bold text-royal-blue mb-4">Project Description</h2>
              <div className="text-royal-blue leading-relaxed whitespace-pre-wrap">
                {gig.description}
              </div>
            </div>
          </div>

          {isOwner ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-powder-blue text-center">
              <h2 className="text-2xl font-bold text-royal-blue mb-4">
                This is your gig
              </h2>
              <p className="text-royal-blue mb-6">
                Review and manage all bids submitted for this project
              </p>
              <Link to={`/gigs/${gigId}/bids`}>
                <button className="bg-royal-blue text-bone px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg">
                  View All Bids
                </button>
              </Link>
            </div>
          ) : isLoggedIn ? (
            !showBidForm ? (
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-powder-blue text-center">
                <button
                  onClick={() => setShowBidForm(true)}
                  className="bg-royal-blue text-bone px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg"
                >
                  Place Bid
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-powder-blue">
                <h2 className="text-2xl font-bold text-royal-blue mb-6">Submit Your Bid</h2>

                {bidError && <ErrorMessage message={bidError} />}

                {bidLoading ? (
                  <LoadingSpinner />
                ) : (
                  <form onSubmit={handleBidSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="bidAmount" className="block text-royal-blue font-semibold mb-2">
                        Your Proposed Price
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-royal-blue font-bold text-xl">
                          $
                        </span>
                        <input
                          type="number"
                          id="bidAmount"
                          placeholder="4500"
                          value={bidFormData.proposedPrice}
                          onChange={(e) => setBidFormData({ ...bidFormData, proposedPrice: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue text-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="coverLetter" className="block text-royal-blue font-semibold mb-2">
                        Cover Letter
                      </label>
                      <textarea
                        id="coverLetter"
                        rows="8"
                        placeholder="Tell the client why you're the best fit for this project..."
                        value={bidFormData.message}
                        onChange={(e) => setBidFormData({ ...bidFormData, message: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue resize-none"
                      ></textarea>
                      <p className="text-sm text-royal-blue opacity-70 mt-2">
                        Minimum 20 characters
                      </p>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        type="button"
                        onClick={() => {
                          setShowBidForm(false);
                          setBidError("");
                          setBidFormData({ message: "", proposedPrice: "" });
                        }}
                        className="flex-1 border-2 border-royal-blue text-royal-blue py-4 rounded-lg font-bold text-lg hover:bg-powder-blue transition-all duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-royal-blue text-bone py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        Submit Bid
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-powder-blue text-center">
              <h2 className="text-2xl font-bold text-royal-blue mb-4">
                Please login to place a bid
              </h2>
              <Link to="/login">
                <button className="bg-royal-blue text-bone px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GigDetails;
