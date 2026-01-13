import './App.css'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BrowseGigs from './pages/BrowseGigs'
import GigDetails from './pages/GigDetails'
import CreateGig from './pages/CreateGig'
import MyGigs from './pages/MyGigs'
import GigBids from './pages/GigBids'
import MyBids from './pages/MyBids'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "gigs",
        element: <BrowseGigs/>
      },
      {
        path: "gigs/:id",
        element: <GigDetails/>
      },
      {
        path: "create-gig",
        element: <CreateGig/>
      },
      {
        path: "my-gigs",
        element: <MyGigs/>
      },
      {
        path: "gigs/:id/bids",
        element: <GigBids/>
      },
      {
        path: "my-bids",
        element: <MyBids/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
