


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFirebaseAuth } from '../Auth/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewDetails = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useFirebaseAuth();
  const { id } = useParams(); // Get the review ID from the URL
  const [review, setReview] = useState(null);

  useEffect(() => {
  
    axios.get(`https://chillgamermostafiz16.vercel.app/reviewDetails/${id}`)
      .then((response) => {
        setReview(response.data);
      })
      .catch((error) => {
        console.error('Error fetching review details:', error);
      });
  }, [id]);

  const handleAddToWatchList = () => {
    if (!user) {
      Swal.fire({
        title: 'Please Login Fast',
        text: 'You must be logged in to add to the watchlist!',
        icon: 'warning',
      });
      return;
    }

    const watchlistData = {
      ...review,
      userEmail: user.email,
      userName: user.displayName,
    };

    setLoading(true);
    // Add to watchlist in the database
    axios.post('https://chillgamermostafiz16.vercel.app/watchlist', watchlistData)
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            title: 'Success',
            text: 'Added to your WatchList!',
            icon: 'success',
          });

          setLoading(false);
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Failed to add to the WatchList.',
            icon: 'error',
          });
        }
      })
      .catch((error) => {
        console.error('Error adding to watchlist:', error);
        setLoading(false);
        Swal.fire({
          title: 'Error',
          text: 'Something went wrong!',
          icon: 'error',
        });
      });
  };

  if (!review) {
    return (
        <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#A91D3A]"></div>
    </div>
    );
  }

  return (
    <div className="bg-[#151515] min-h-screen py-12 px-4 text-white">
      <div className="md:w-10/12 mx-auto p-6 bg-[#1A1A1A] rounded-2xl shadow-lg shadow-[#A91D3A]">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Game Cover */}
          <div className="flex-1">
            <img
              src={review.gameCover}
              alt={review.gameTitle}
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          {/* Review Details */}
          <div className="flex-1 space-y-4">
            <h1 className="font_header text-4xl md:text-5xl font-bold text-[#A91D3A]">{review.gameTitle}</h1>
            <p className="text-gray-300">{review.reviewDescription}</p>
            <div className="flex flex-wrap gap-4">
          
            <p className='flex gap-1 items-center justify-center'>
  <span className="font-bold text-[#A91D3A] flex gap-1">Rating:</span>
  <span className="flex ">
    {[...Array(5)].map((_, index) => (
      <span key={index} className="text-white text-lg">
        {review.rating > index ? <AiFillStar /> : <AiOutlineStar />}
      </span>
    ))}
  </span>
</p>

              <p><span className="font-bold text-[#A91D3A]">Year:</span> {review.year}</p>
              <p><span className="font-bold text-[#A91D3A]">Genre:</span> {review.genre}</p>
            </div>
            <div className="text-sm text-gray-400">
              <p><span className="font-bold text-[#A91D3A]">Reviewer:</span> {review.userName}</p>
              <p><span className="font-bold text-[#A91D3A]">Email:</span> {review.userEmail}</p>
            </div>
            {
                user ?  <button
                type="submit"
                className="w-56 py-2 px-2 md:px-4 bg-[#A91D3A] text-white rounded-md shadow-md hover:bg-[#9c1631] transition-all duration-300 flex justify-center items-center"
                onClick={handleAddToWatchList}
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-white"></div>
                ) : (
                  "Add to WatchList"
                )}
              </button> : <button
              className="w-56 py-2 px-2 md:px-4  bg-[#908d8e] text-white rounded-md shadow-lg hover:bg-[#6f6c6d] transition-all" 
              onClick={handleAddToWatchList}
            >
              Add to WatchList
            </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
