



import React, { useEffect, useState } from 'react';
import axios from 'axios';  // To make API requests
import { Link } from 'react-router-dom';  // If you want to navigate to a review detail page
import { AiFillStar } from 'react-icons/ai';  // Rating stars
import { Typewriter } from 'react-simple-typewriter';

const HightestRatedGame = () => {
  const [games, setGames] = useState([]);


  useEffect(() => {
    axios
      .get('http://localhost:5000/highestRated')  // Replace with your API endpoint
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error("Error fetching highest rated games:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 my-8">
      <h1 className="text-4xl font-bold text-[#A91D3A] text-center mb-8">

      <span style={{ color: '#A91D3A', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Highest Rated Games', 'Top Ratings', 'More Exciting', ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>

      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6  ">
        {games.map((review) => (
           <div key={review._id} className="bg-[#1A1A1A] rounded-lg shadow-lg p-6 shadow-[#A91D3A] hover:scale-105 transition-all duration-300" >
           <div data-aos="fade-up">
           <img
             src={review.gameCover}
             alt={review.gameTitle}
             className="w-full h-48 object-cover rounded-md mb-4  shadow-[#A91D3A]"
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

export default HightestRatedGame;
