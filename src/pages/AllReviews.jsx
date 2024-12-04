

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Aos from 'aos';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
   
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/reviews'); 
        console.log(response.data)
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);

  return (
    <div className=" text-white min-h-screen py-12 " >
      <h2 className="text-4xl font-bold text-[#A91D3A] text-center mb-8">All Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:w-10/12 mx-auto">
        {reviews.map((review) => (
          <div key={review._id} className="bg-[#1A1A1A] rounded-lg shadow-lg p-6 hover:shadow-[#A91D3A] hover:scale-105 transition-all duration-300" >
            <div data-aos="fade-up">
            <img
              src={review.gameCover}
              alt={review.gameTitle}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#A91D3A]">{review.gameTitle}</h3>
            <p className="text-gray-300 mb-4">{review.reviewDescription.substring(0, 100)}...</p>
            <div className="flex justify-between items-center">
              <span className="text-[#A91D3A]">Rating: {review.rating}</span>
              <span className="text-gray-400">{review.year}</span>
            </div>
            <Link to={`/reviewDetails/${review._id}`} className="mt-4 inline-block px-6 py-2 bg-[#A91D3A] text-white rounded-md hover:bg-[#9c1631] transition-all duration-300">
              Explore Details
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
