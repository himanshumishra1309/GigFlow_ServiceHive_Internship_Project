# GigFlow - Freelance Marketplace Platform

A full-stack mini-freelance marketplace where clients can post gigs and freelancers can bid on them.

## 🚀 Live Demo

- **Frontend**: [https://gig-flow-service-hive-internship-pr.vercel.app](https://gig-flow-service-hive-internship-pr.vercel.app)
- **Backend API**: [https://gigflow-backend.up.railway.app](https://gigflow-backend.up.railway.app)

## 📋 Features

### Core Features
- ✅ **User Authentication**: Secure sign-up/login with JWT and HttpOnly cookies
- ✅ **Fluid Roles**: Any user can act as both client (post gigs) and freelancer (bid on gigs)
- ✅ **Gig Management**: Full CRUD operations for job postings
- ✅ **Search & Filter**: Search gigs by title
- ✅ **Bidding System**: Freelancers can submit bids with custom messages and prices
- ✅ **Hiring Logic**: Atomic transaction-based hiring with automatic bid rejection

### Bonus Features Implemented
- ✅ **Transactional Integrity**: MongoDB transactions prevent race conditions during hiring
- ✅ **Real-time Notifications**: Socket.io integration for instant updates
  - Clients receive notifications when freelancers bid
  - Freelancers receive hire/reject notifications in real-time
- ✅ **Pagination**: Efficient data loading on all listing pages
- ✅ **Custom UI Components**: Confirmation dialogs, status badges, loading states

## 🛠️ Tech Stack

### Frontend
- React 19 with Vite
- Tailwind CSS v4
- React Router v7
- Context API for state management
- Socket.io-client for real-time updates
- Axios for API calls

### Backend
- Node.js + Express.js
- MongoDB with Mongoose
- JWT Authentication
- Socket.io for WebSockets
- Bcrypt for password hashing

## 📁 Project Structure

```
GigFlow_ServiceHive_Internship_Project/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # Auth & Socket contexts
│   │   ├── pages/         # Route pages
│   │   └── service/       # API service layer
│   └── .env.example
├── server/                # Express backend
│   ├── src/
│   │   ├── controller/   # Business logic
│   │   ├── model/        # Mongoose schemas
│   │   ├── route/        # API routes
│   │   ├── middleware/   # Auth middleware
│   │   └── utils/        # Helper functions
│   └── .env.example
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd GigFlow_ServiceHive_Internship_Project
```

2. **Setup Backend**
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and secrets
npm run dev
```

3. **Setup Frontend**
```bash
cd client
npm install
cp .env.example .env
# Edit .env with backend URL
npm run dev
```

### Environment Variables

#### Backend (.env)
```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
ACCESS_TOKEN_SECRET=your_secret_key
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=10d
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:8000
```

## 📡 API Documentation

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login and set HttpOnly cookie

### Gigs
- `GET /api/gigs` - Fetch all gigs (with search & pagination)
- `POST /api/gigs` - Create a new gig (authenticated)
- `GET /api/gigs/:id` - Get gig details
- `PUT /api/gigs/:id` - Update gig (owner only)
- `DELETE /api/gigs/:id` - Delete gig (owner only)
- `PATCH /api/gigs/:id/hire` - Hire a freelancer (atomic transaction)

### Bids
- `POST /api/bids` - Submit a bid
- `GET /api/bids/user` - Get user's bids (with pagination)
- `GET /api/bids/gig/:gigId` - Get all bids for a gig (owner only)
- `DELETE /api/bids/:id` - Delete a bid

## 🔒 Security Features

- JWT tokens stored in HttpOnly cookies
- Password hashing with bcrypt
- Protected routes with authentication middleware
- CORS configuration
- MongoDB transactions for data consistency

## ⚡ Real-time Features

Socket.io events:
- `newBid` - Notify gig owner when freelancer bids
- `bidAccepted` - Notify freelancer when hired
- `bidRejected` - Notify freelancers when not selected

## 🗄️ Database Schema

### User
```javascript
{
  name: String,
  email: String (unique),
  username: String (unique),
  password: String (hashed),
  contact_no: String
}
```

### Gig
```javascript
{
  title: String,
  description: String,
  budget: Number,
  ownerId: ObjectId (ref: User),
  status: String (enum: ['open', 'assigned']),
  freelancerId: ObjectId (ref: User, optional)
}
```

### Bid
```javascript
{
  gigId: ObjectId (ref: Gig),
  freelancerId: ObjectId (ref: User),
  message: String,
  proposedPrice: Number,
  status: String (enum: ['pending', 'hired', 'rejected'])
}
```

## 🎯 Key Implementation Details

### Hiring Logic (Atomic Transaction)
When a client hires a freelancer:
1. Start MongoDB session and transaction
2. Update gig status to "assigned" and set freelancerId
3. Update selected bid status to "hired"
4. Update all other bids for that gig to "rejected"
5. Commit transaction (rollback on any failure)
6. Emit Socket.io events to notify users

### Real-time Notification System
- Socket.io connection authenticates with user ID
- Server maintains a Map of connected users (userId → socketId)
- When events occur, server emits to specific socket IDs
- Frontend displays notifications with auto-dismiss

## 📦 Deployment

### Backend (Railway)
1. Connect GitHub repository
2. Set root directory to `server`
3. Add environment variables
4. Railway auto-deploys on push

### Frontend (Vercel)
1. Connect GitHub repository
2. Set root directory to `client`
3. Add `VITE_API_URL` environment variable
4. Vercel auto-deploys on push

## 🧪 Testing

Access the deployed app and test:
1. Register/Login as User A and User B
2. User A posts a gig
3. User B bids on the gig
4. User A sees real-time notification of new bid
5. User A hires User B
6. User B sees real-time hire notification
7. Verify other bids are automatically rejected

## 👨‍💻 Author

Himanshu Mishra

## 📄 License

This project is part of an internship assignment.
