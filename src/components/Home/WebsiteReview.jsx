import React, { useState } from 'react';
import { useFirebaseAuth } from '../../Auth/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';  // Import SweetAlert2
import websiteAnimation from "../../../public/website2.json"
import Lottie from 'lottie-react';
import send from "../../../public/send.json"
import { Typewriter } from 'react-simple-typewriter';

const WebsiteReview = () => {
  const { user } = useFirebaseAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    description: '',
    rating: 1,
  });



  const style1 = {
    height: 500,
  };
  

  const style2 = {
    height: 30,
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
      setLoading(true);
      const response = await axios.post('https://chillgamermostafiz16.vercel.app/websiteReview', formData);
      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Review Submitted',
          text: 'Thank you for your feedback!',
          confirmButtonText: 'OK',
          confirmButtonColor: '#A91D3A',
        });
        setLoading(false);
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
     <h2 className="font_header text-3xl h-[100px]  sm:text-3xl md:text-5xl font-bold  text-[#A91D3A] text-center mb-6 ">
     <span style={{ color: '#A91D3A', fontWeight: 'bold' }} className='font_header'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Send Website Review',"Review For Website", "It's Dynamic", "Review For Website"]}
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
              className="w-full py-3 bg-[#A91D3A] text-white text-xl font-semibold rounded-lg hover:bg-[#9c1631] transition-all duration-300 flex justify-center items-center gap-2"
            >
             { loading ? <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-white"></div> : <> Submit Review <Lottie
      animationData={send}
      style={style2}
    /></>}
            </button>
          </div>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-1/2 p-6">
      <Lottie
      animationData={websiteAnimation}
      style={style1}
    />
      </div>
    </div>
   </div>
  );
};

export default WebsiteReview;
