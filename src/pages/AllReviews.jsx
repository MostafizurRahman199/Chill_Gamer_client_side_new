
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import { Typewriter } from 'react-simple-typewriter';
import StarRating from '../components/shared/StarRating';
import { useTheme } from '../components/Home/DarkModeToggle';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [sortOption, setSortOption] = useState('rating-asc');
  const [filterGenre, setFilterGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const {darkMode} = useTheme()
  console.log(darkMode);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://chillgamermostafiz16.vercel.app/reviews');
        setReviews(response.data);
        const uniqueGenres = [...new Set(response.data.map(review => review.genre).flat())];
        setGenres(uniqueGenres);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleGenreChange = (e) => {
    setFilterGenre(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const sortedReviews = () => {
    let sorted = [...reviews];
    if (sortOption === 'rating-asc') {
      sorted = sorted.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === 'rating-desc') {
      sorted = sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'year-asc') {
      sorted = sorted.sort((a, b) => a.year - b.year);
    } else if (sortOption === 'year-desc') {
      sorted = sorted.sort((a, b) => b.year - a.year);
    }
    return sorted;
  };

  const filteredReviews = () => {
    return sortedReviews().filter((review) => {
      const matchesGenre = filterGenre ? review.genre.includes(filterGenre) : true;
      const matchesSearch = review.gameTitle.toLowerCase().includes(searchTerm);
      return matchesGenre && matchesSearch;
    });
  };


  const cleanDescription = (description) => {
    const cleanedDescription = description ? description.substring(0, 100) : '';
    return cleanedDescription;
  };

  if(loading){
    return <div className="min-h-screen flex items-center justify-center bg-[#151515] ">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#A91D3A]"></div>
  </div>
  }

  return (
    <div className=" min-h-screen py-12">
      <h2 className="font_header text-3xl md:text-4xl font-bold text-[#A91D3A] text-center mb-8">All Reviews

      <span style={{ color: '#A91D3A', fontWeight: 'bold' }} className='font_header'>
        
          <Typewriter
            words={[' Sort', ' Search', ' Filter','.' ]}
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

   
      <div className={`flex flex-col gap-4 md:flex md:flex-row justify-between mb-6 px-4 md:w-10/12 mx-auto `}>
        <div className="flex flex-col justify-start lg:flex lg:flex-row lg:items-center">
          <label className="mr-4 text-lg">Sort By:</label>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className={`${darkMode === true ? "bg-black text-white" : "text-black"}  border border-[#A91D3A] rounded-md p-2`}
          >
            <option value="rating-asc">Rating (Low to High)</option>
            <option value="rating-desc">Rating (High to Low)</option>
            <option value="year-asc">Year (Old to New)</option>
            <option value="year-desc">Year (New to Old)</option>
          </select>
        </div>

        <div className="flex flex-col justify-start lg:flex lg:flex-row lg:items-center">
          <label className="mr-4 text-lg">Search by Title:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Title..."
            className={`${darkMode === true ? "bg-black text-white" : "text-black"}   border border-[#A91D3A] rounded-md p-2`}
          />
        </div>

        <div className="flex flex-col justify-start lg:flex lg:flex-row lg:items-center">
          <label className="mr-4 text-lg">Filter by Genre:</label>
          <select
            value={filterGenre}
            onChange={handleGenreChange}
            className={ `${darkMode === true ? "bg-black text-white" : "text-black"}  border border-[#A91D3A] rounded-md p-2`}
          >
            <option value="">All Genres</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:w-10/12 mx-auto">
        {filteredReviews().map((review) => (
          <div key={review._id} className="bg-[#1A1A1A] rounded-lg shadow-lg p-4 hover:shadow-[#A91D3A] hover:scale-105 transition-all duration-300">
            <div data-aos="fade-up" className='flex flex-col h-full justify-between'>
              <div>
              <img
                src={review.gameCover}
                alt={review.gameTitle}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#A91D3A]">{review.gameTitle.slice(0,15)+".."}</h3>
              {/* <p className="text-gray-300 mb-4">{cleanDescription(review.reviewDescription)}...</p> */}
              <div className="flex justify-between items-center py-2">
                {/* <span className="text-[#A91D3A]">Rating: {review.rating}</span> */}
                <StarRating rating={review.rating}></StarRating>
                <span className="text-gray-400">{review.year}</span>
              </div>
              </div>
             <div>
             <Link to={`/reviewDetails/${review._id}`} className="mt-4 inline-block px-6 py-2 bg-[#A91D3A] text-white rounded-md hover:bg-[#9c1631] transition-all duration-300">
                Explore Details
              </Link>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
