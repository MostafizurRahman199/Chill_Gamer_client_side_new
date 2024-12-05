import React, { useState } from 'react';
import { useFirebaseAuth } from '../../Auth/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';  // Import SweetAlert2
import websiteAnimation from "../../../public/website2.json"
import Lottie from 'lottie-react';

const WebsiteReview = () => {
  const { user } = useFirebaseAuth();
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    description: '',
    rating: 1,
  });



  const style = {
    height: 500,
  };
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/websiteReview', formData);
      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Review Submitted',
          text: 'Thank you for your feedback!',
          confirmButtonText: 'OK',
          confirmButtonColor: '#A91D3A',
        });
        
        setFormData({name: "",  profession: '', description: '', rating: 1 });
    }
} catch (error) {
    
    console.error(error);
    Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'There was an error submitting your review. Please try again.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#A91D3A',
        
      });
    }
  };

  return (
   <div>
     <h2 className="text-4xl font-semibold text-[#A91D3A] text-center mb-6">Website Review</h2>
     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen  p-4">
   
      <div className="w-full md:w-1/2 p-6  max-w-lg">
       
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg ">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border-b-2"
              required
            />
          </div>
          <div>
            <label htmlFor="profession" className="block text-lg ">Profession</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border-b-2   "
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg  ">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3  bg-transparent border-b-2 "
              rows="4"
              required
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-lg ">Rating</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full  p-3 bg-transparent border-b-2   "
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating} className='text-black'>{rating}</option>
              ))}
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-b-[#A91D3A] text-white  bg-[#d51a3f] transition duration-300"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-1/2 p-6">
      <Lottie
      animationData={websiteAnimation}
      style={style}
    />
      </div>
    </div>
   </div>
  );
};

export default WebsiteReview;
