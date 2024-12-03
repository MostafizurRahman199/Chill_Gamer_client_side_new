




import React, { useEffect, useState } from 'react';
import { useFirebaseAuth } from '../Auth/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import Aos from 'aos';

const MyReviews = () => {
  const { user } = useFirebaseAuth();
  const email = user?.email;
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  
  // Form fields states
  const [gameCover, setGameCover] = useState('');
  const [gameTitle, setGameTitle] = useState('');
  const [reviewDescription, setReviewDescription] = useState('');
  const [rating, setRating] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');

  // Fetch reviews from DB
  useEffect(() => {
    if (email) {
      axios.get(`http://localhost:5000/myreviews/${email}`)
        .then(response => {
          setReviews(response.data);
        })
        .catch(error => {
          console.error('Error fetching reviews:', error);
        });
    }
  }, [email]);


  useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);


  // Handle Update Review
  const handleUpdate = (reviewId) => {
    axios.get(`http://localhost:5000/updateReviews/${reviewId}`)
      .then(response => {
        console.log(response.data)

        const review = response.data;
        setGameCover(review.gameCover);
        setGameTitle(review.gameTitle);
        setReviewDescription(review.reviewDescription);
        setRating(review.rating);
        setYear(review.year);
        setGenre(review.genre);
        setSelectedReview(review); // Set the selected review for updating
        setShowModal(true); // Open modal

      })
      .catch(error => {
        console.error('Error fetching review details:', error);
      });
  };



  // Handle Submit Updated Review
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedReview = {
      gameCover,
      gameTitle,
      reviewDescription,
      rating,
      year,
      genre,
    };

    axios.put(`http://localhost:5000/updateReviews/${selectedReview._id}`, updatedReview)
      .then(response => {
        if (response.data.success) {
          Swal.fire({
            title: "Updated!",
            text: "Your review has been updated.",
            icon: "success",
          });
          // Update review in the state
          setReviews(prevReviews => prevReviews.map(review => 
            review._id === selectedReview._id ? { ...review, ...updatedReview } : review
          ));
          setShowModal(false); // Close modal
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to update review.",
            icon: "error",
          });
        }
      })
      .catch(error => {
        console.error('Error updating review:', error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      });
  };

  // Handle Delete Review
  const handleDelete = async (reviewId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/myreviews/${reviewId}`)
          .then(result => {
            if (result.data.success) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
              setReviews(prevReviews => prevReviews.filter(review => review._id !== reviewId));
            } else {
              Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Something went wrong. Please try again.",
                showConfirmButton: false,
                timer: 1500
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#151515] min-h-screen py-12 px-4 text-white">
      <h2 className="text-4xl font-bold text-[#A91D3A] text-center mb-8">My Reviews</h2>
      
      {reviews.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-center">
            <thead>
              <tr className="border-b-2 border-[#A91D3A]">
                <th className="py-2 px-4">Game Title</th>
                <th className="py-2 px-4">Rating</th>
                <th className="py-2 px-4">Year</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map(review => (
                <tr key={review._id} className="border-b border-[#333] hover:bg-[#1A1A1A]">
                  <td className="py-2 px-4">{review.gameTitle}</td>
                  <td className="py-2 px-4">{review.rating}</td>
                  <td className="py-2 px-4">{review.year}</td>
                  <td className="py-2 px-4 flex gap-4 justify-center">
                    <button
                      className="px-4 py-2 bg-[#A91D3A] text-white rounded-md shadow-[#A91D3A] hover:bg-[#9c1631]"
                      onClick={() => handleUpdate(review._id)}>
                      Update
                    </button>
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700"
                      onClick={() => handleDelete(review._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg">You haven't added any reviews yet.</p>
      )}

      {/* Modal for updating review */}
      {showModal && (
        <div   className="transition-all duration-300 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div data-aos='zoom-in-left' className="bg-[#151515] p-6 rounded-lg w-full md:w-1/2">
            <h2 className="text-2xl text-center text-[#A91D3A] mb-4">Update Review</h2>
            <form  onSubmit={handleSubmit} className="space-y-4">

            <div className="mb-4">
                <label className="block text-sm font-medium text-white">Genre</label>
                <select
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                >
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

              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Game Image URL</label>
                <input
                  type="url"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                  value={gameCover}
                  onChange={(e) => setGameCover(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Game Title</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                  value={gameTitle}
                  onChange={(e) => setGameTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Review Description</label>
                <textarea
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                  value={reviewDescription}
                  onChange={(e) => setReviewDescription(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium text-white">Rating</label>
                  <input
                    type="number"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    min="1"
                    max="5"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-white">Year</label>
                  <input
                    type="text"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>
              



              <div className="flex gap-4 justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#A91D3A] text-white rounded-md shadow-md hover:bg-[#9c1631]"
                >
                  Update Review
                </button>
                <button
                  type="button"
                  className="px-6 py-2 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
