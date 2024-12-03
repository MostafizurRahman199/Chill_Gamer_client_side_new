// import React from 'react'

// const AllReviews = () => {


// // /** 
// // * Paste one or more documents here
// // */
// // {
// //     "gameCover": "https://media.wired.com/photos/62855b1bb6cfd378a30c474a/master/pass/Build-Game-Watch-It-Die-Hyper-Scape-Games.jpg",
// //     "gameTitle": "Hunter Game",
// //     "reviewDescription": "Control the assassin and hunt down your targets one by one. Use your surroundings and shadows to stay hidden from flashlights.",
// //     "rating": 5,
// //     "year": "2018",
// //     "genre": "Action",
// //     "userEmail": "fardilshifat199@gmail.com",
// //     "userName": "Shifat",
// //     "createdAt": {
// //       "$date": "2024-12-03T16:31:13.981Z"
// //     }
// //   }
    
//   return (
//     <div>AllReviews</div>
//   )
// }

// export default AllReviews





import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from backend
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/reviews'); // Replace with 
        console.log(response.data)
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="bg-[#151515] text-white min-h-screen py-12 ">
      <h2 className="text-4xl font-bold text-[#A91D3A] text-center mb-8">All Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-10/12 mx-auto">
        {reviews.map((review) => (
          <div key={review._id} className="bg-[#1A1A1A] rounded-lg shadow-lg p-6">
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
            <a href={`/reviews/${review._id}`} className="mt-4 inline-block px-6 py-2 bg-[#A91D3A] text-white rounded-md hover:bg-[#9c1631] transition-all duration-300">
              Explore Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
