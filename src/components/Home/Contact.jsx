import React, { useState } from 'react';
import Swal from 'sweetalert2';  // SweetAlert for confirmation
import axios from 'axios';  // Axios for making API requests
import contactImage2 from "../../assets/contact6.png"
import { IoIosSend } from 'react-icons/io';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the server using Axios
    axios
      .post('http://localhost:5000/contact', formData)  // Backend API route
      .then((response) => {
        Swal.fire({
          title: 'Thank you for contacting us!',
          text: response.data.message || 'We will get back to you soon.',
          icon: 'success',
          confirmButtonColor: '#A91D3A',  // Custom color theme
        });

       setFormData({
        name: '',
        email: '',
        message: ''
       })
      })
      .catch((error) => {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonColor: '#A91D3A',
        });
      });
  };

  return (
    <div className="w-full md:w-10/12  mx-auto flex flex-col items-center justify-center md:flex-row min-h-[600px]  border-2 border-[#A91D3A] md:rounded-3xl bg-[#151515] shadow-custom">
   
           


      <div className="flex-1 ">
        <img
          src={contactImage2} 
          alt="Contact Us"
          className="w-full h-[599px] object-cover rounded-l-3xl"
        />
      </div>


      <div className="flex-1 flex justify-center items-center p-8 ">
        {/* <form
          className="w-full max-w-lg bg-[#1A1A1A] p-6 rounded-lg shadow-2xl"
          onSubmit={handleSubmit}
        > */}
        <form
          className="w-full max-w-lg p-1 md:p-6 rounded-l-lg "
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-semibold text-[#A91D3A] text-center mb-4">Contact Us</h2>

       
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3  border border-[#A91D3A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A91D3A]"
            //   className="w-full p-3 bg-[#151515] border border-[#A91D3A] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A91D3A]"
              required
            />
          </div>

         
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3  border border-[#A91D3A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A91D3A]"
            //   className="w-full p-3 bg-[#151515] border border-[#A91D3A] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A91D3A]"
              required
            />
          </div>

       
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3  border border-[#A91D3A] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A91D3A]"
            //   className="w-full p-3 bg-[#151515] border border-[#A91D3A] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A91D3A]"
              required
            />
          </div>

      
          <button
            type="submit"
            className="w-full py-3 bg-[#A91D3A] text-white text-xl font-semibold rounded-lg hover:bg-[#9c1631] transition-all duration-300 flex justify-center items-center gap-2"
          >
            Send <IoIosSend className='text-2xl' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
