
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Aos from 'aos';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [sortOption, setSortOption] = useState('rating-asc');
  const [filterGenre, setFilterGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/reviews');
        setReviews(response.data);
        const uniqueGenres = [...new Set(response.data.map(review => review.genre).flat())];
        setGenres(uniqueGenres);
      } catch (error) {
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

  return (
    <div className="text-white min-h-screen py-12">
      <h2 className="text-4xl font-bold text-[#A91D3A] text-center mb-8">All Reviews</h2>

   
      <div className="flex justify-between mb-6 px-4 md:w-10/12 mx-auto">
        <div className="flex items-center">
          <label className="mr-4 text-lg">Sort By:</label>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="bg-[#1A1A1A] text-gray-300 border border-[#A91D3A] rounded-md p-2"
          >
            <option value="rating-asc">Rating (Low to High)</option>
            <option value="rating-desc">Rating (High to Low)</option>
            <option value="year-asc">Year (Old to New)</option>
            <option value="year-desc">Year (New to Old)</option>
          </select>
        </div>

        <div className="flex items-center mx-4">
          <label className="mr-4 text-lg">Search by Title:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Title..."
            className="bg-[#1A1A1A] text-gray-300 border border-[#A91D3A] rounded-md p-2"
          />
        </div>

        <div className="flex items-center">
          <label className="mr-4 text-lg">Filter by Genre:</label>
          <select
            value={filterGenre}
            onChange={handleGenreChange}
            className="bg-[#1A1A1A] text-gray-300 border border-[#A91D3A] rounded-md p-2"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:w-10/12 mx-auto">
        {filteredReviews().map((review) => (
          <div key={review._id} className="bg-[#1A1A1A] rounded-lg shadow-lg p-6 hover:shadow-[#A91D3A] hover:scale-105 transition-all duration-300">
            <div data-aos="fade-up">
              <img
                src={review.gameCover}
                alt={review.gameTitle}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#A91D3A]">{review.gameTitle}</h3>
              <p className="text-gray-300 mb-4">{cleanDescription(review.reviewDescription)}...</p>
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
