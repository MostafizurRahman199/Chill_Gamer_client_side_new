



import React, { useEffect, useState } from 'react';
import { useFirebaseAuth } from '../Auth/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import reviewImage from "../assets/review2.png"
import Swal from 'sweetalert2';
import Aos from 'aos';
import Lottie from "lottie-react";
import reviewAnimation from "../../public/add_review.json";
import { Typewriter } from 'react-simple-typewriter';

const AddReview = () => {
  const { user } = useFirebaseAuth();
  const navigate = useNavigate();

  // State management
  const [gameCover, setGameCover] = useState('');
  const [gameTitle, setGameTitle] = useState('');
  const [reviewDescription, setReviewDescription] = useState('');
  const [rating, setRating] = useState(5);
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');


  const style = {
    height: 500,
  };
  




  // Redirect to login if no user is logged in
  if (!user) {
    navigate('/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Review data to be sent to the server
    const reviewData = {
      gameCover,
      gameTitle,
      reviewDescription,
      rating,
      year,
      genre,
      userEmail: user.email,
      userName: user.displayName
    };

    try {
      // Sending POST request to the server
      const response = await axios.post('http://localhost:5000/addreview', reviewData);
      console.log(response);

      if (response.data.success) {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Review Added Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        setGameCover('');
        setGameTitle('');
        setReviewDescription('');
        setRating(5);
        setYear('');
        setGenre('');
      } else {
        toast.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);

  return (
<div className=' text-white min-h-screen mx-auto py-8'>

  <h2 className="text-3xl font-bold text-[#A91D3A] text-center my-2">


  <span style={{ color: '#A91D3A', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Add New Review', 'Become Top Reviewer', 'Get Point', 'Add New Review']}
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
  </h2>

  <div className="bg-[#151515] w-10/12 mx-auto p-8 rounded-2xl shadow-2xl shadow-[#A91D3A]  flex flex-col md:flex-row " data-aos='zoom-in'>


  <div className="w-full hidden md:block md:flex-1 mt-8 md:mt-0">
  <Lottie
      animationData={reviewAnimation}
      style={style}
    />
    </div>

    <form onSubmit={handleSubmit} className="space-y-4 md:flex-1 ">
      {/* Game Cover URL */}
      <div className='flex flex-col md:flex-row gap-4'>
        <div className="mb-4 flex-1">
          <label htmlFor="gameCover" className="block text-sm font-medium text-white">Game Image URL</label>
          <input
            type="url"
            id="gameCover"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            value={gameCover}
            onChange={(e) => setGameCover(e.target.value)}
            required
          />
        </div>

        {/* Game Title */}
        <div className="mb-4 flex-1">
          <label htmlFor="gameTitle" className="block text-sm font-medium text-white">Game Title</label>
          <input
            type="text"
            id="gameTitle"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            value={gameTitle}
            onChange={(e) => setGameTitle(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Review Description */}
      <div className="mb-4">
        <label htmlFor="reviewDescription" className="block text-sm font-medium text-white">Review Description</label>
        <textarea
          id="reviewDescription"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
          value={reviewDescription}
          onChange={(e) => setReviewDescription(e.target.value)}
          required
        />
      </div>

      {/* Rating & Year */}
      <div className="mb-4 flex flex-wrap gap-4 md:flex-nowrap">
        <div className="w-full md:w-1/2">
          <label htmlFor="rating" className="block text-sm font-medium text-white">Rating</label>
          <input
            type="number"
            id="rating"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>

        <div className="w-full md:w-1/2">
          <label htmlFor="year" className="block text-sm font-medium text-white">Publishing Year</label>
          <input
            type="text"
            id="year"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Genre */}
      <div className="mb-4">
        <label htmlFor="genre" className="block text-sm font-medium text-white">Genre</label>
        <select
          id="genre"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        >
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="RPG">RPG</option>
          <option value="Adventure">Adventure</option>
          <option value="Shooter">Shooter</option>
          <option value="Strategy">Strategy</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Horror">Horror</option>
          <option value="Simulation">Simulation</option>
          <option value="Sports">Sports</option>
          <option value="Fighting">Fighting</option>
        </select>
      </div>

      {/* User Email */}
      <div className='flex flex-col md:flex-row gap-4'>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-white">User Email</label>
          <input
            type="email"
            value={user?.email || ''}
            readOnly
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"
          />
        </div>

        {/* User Name */}
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-white">User Name</label>
          <input
            type="text"
            value={user?.displayName || ''}
            readOnly
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-[#A91D3A] text-white rounded-md shadow-md hover:bg-[#9c1631] transition-all duration-300"
      >
        Submit Review
      </button>
    </form>

    {/* Image section */}
 

  </div>
</div>

  );
};

export default AddReview;
