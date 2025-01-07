import React, { useEffect } from 'react';
import Lottie from "lottie-react";
import missionAnimation from "../../public/mission.json";
import story from "../../public/story.png";
import Aos from 'aos';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {


  const { ref, inView } = useInView({ triggerOnce: true });

    const style = {
        height: 200,
      };
      
      useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    


  return (
    <div className="bg-[#151515] text-white min-h-screen">
      <div className="max-w-6xl mx-auto p-8 sm:p-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font_header text-[#A91D3A]">About Us</h1>
          <p className="text-lg text-gray-300 mt-4">
            Chill Gamer is your go-to platform for game reviews and recommendations. We are crafted for a delightful and chill experience.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div data-aos="fade-right">
            <h2 className="text-3xl font_header text-[#A91D3A] mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg">
              Helping gamers worldwide discover and share the best gaming experiences. We aim to create a chill, user-friendly space for all gaming enthusiasts.
            </p>
          </div>
          <div>
                <Lottie
            animationData={missionAnimation}
            style={style}
            />
          </div>
        </div>

        {/* Story Section */}
        <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <img src={story} alt="Our Story" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font_header text-[#A91D3A] mb-4">Our Story</h2>
            <p className="text-gray-300 text-lg">
              Chill Gamer was born from a passion for gaming and a desire to create a supportive community. Our team of enthusiasts works hard to deliver dynamic and engaging content for gamers of all levels.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font_header text-center text-[#A91D3A] mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="flip-left" className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#A91D3A] mb-4">Comprehensive Reviews</h3>
              <p className="text-gray-300">
                Explore detailed reviews written by passionate gamers.
              </p>
            </div>
            <div data-aos="flip-left" className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#A91D3A] mb-4">Dynamic Content</h3>
              <p className="text-gray-300">
                Stay updated with fresh content tailored for gaming enthusiasts.
              </p>
            </div>
            <div data-aos="flip-left" className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#A91D3A] mb-4">Personalized Watchlists</h3>
              <p className="text-gray-300">
                Keep track of must-play games with your personalized watchlist.
              </p>
            </div>
          </div>
        </div>

    
    <div
      className="bg-[#1e1e1e] py-12 rounded-lg shadow-lg mb-16"
      ref={ref}
    >
      <h2 className="text-3xl font_header text-center text-[#A91D3A] mb-8">
        Chill Gamer By the Numbers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
        {/* Reviews */}
        <div>
          <p className="text-5xl font-bold text-[#A91D3A]">
            {inView && <CountUp end={10000} duration={2} separator="," />}+
          </p>
          <p className="text-gray-300">Reviews</p>
        </div>

        {/* Users */}
        <div>
          <p className="text-5xl font-bold text-[#A91D3A]">
            {inView && <CountUp end={5000} duration={2} separator="," />}+
          </p>
          <p className="text-gray-300">Users</p>
        </div>

        {/* Games Covered */}
        <div>
          <p className="text-5xl font-bold text-[#A91D3A]">
            {inView && <CountUp end={100} duration={2} separator="," />}+
          </p>
          <p className="text-gray-300">Games Covered</p>
        </div>
      </div>
    </div>


        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font_header text-[#A91D3A] mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-4">
            Have questions or feedback? Email us at <a href="mailto:support@chillgamer.com" className="text-[#A91D3A] underline">support@chillgamer.com</a>.
          </p>
          <p className="text-gray-300">
            Together, let’s make the gaming world more connected and fun.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
