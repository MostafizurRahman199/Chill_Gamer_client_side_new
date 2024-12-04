import { createBrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import Register from "../pages/Register";
import Login from "../pages/Login";

import ForgetPassword from "../pages/ForgetPassword";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import Profile from "../pages/Profile";

import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";
import AllReviews from "../pages/AllReviews";
import AddReviews from "../pages/AddReviews";
import MyReviews from "../pages/MyReviews";
import GameWatchList from "../pages/GameWatchList";
import ReviewDetails from "../pages/ReviewDetails";

const router = createBrowserRouter([    
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Gamer - Home</title>
                        </Helmet>
                        <Home />
                    </>
                ),
            },
            
           
            {
                path: "/register",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Gamer - Register</title>
                        </Helmet>
                        <Register />
                    </>
                ),
            },
           
            {
                path: "/allReviews",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Game - All Reviews</title>
                        </Helmet>
                        <AllReviews></AllReviews>
                    </>
                ),
               
            },
            {
                path: "/reviewDetails/:id",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Game - Review Details</title>
                        </Helmet>
                        <ReviewDetails></ReviewDetails>
                    </>
                ),
               
            },
           
            {
                path: "/addReview",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Gamer - Add Review</title>
                        </Helmet>
                        <PrivateRoute>
                            <AddReviews/>
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "/myReview",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Gamer - My Review</title>
                        </Helmet>
                        <PrivateRoute>
                            <MyReviews/>
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "/gameWatchList",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Gamer - Game WatchList</title>
                        </Helmet>
                        <PrivateRoute>
                            <GameWatchList/>
                        </PrivateRoute>
                    </>
                ),
            },
           
         
            {
                path: "/login",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Gamer - Login</title>
                        </Helmet>
                        <Login />
                    </>
                ),
            },
            {
                path: "/forgot-password",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Gamer - Forgot Password</title>
                        </Helmet>
                        <ForgetPassword />
                    </>
                ),
            },
            {
                path: "/my-profile",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Gamer - My Profile</title>
                        </Helmet>
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "/update-profile",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Gamer - Update Profile</title>
                        </Helmet>
                        <PrivateRoute>
                            <UpdateProfile />
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "*",
                element: (
                    <>
                        <Helmet>
                            <title>Chill Gamer - Error</title>
                        </Helmet>
                        <ErrorPage />
                    </>
                ),
            },
            
           
        ],
    },
  
]);

export default router;