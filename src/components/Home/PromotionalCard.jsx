import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const promotionalData = [
  {
    id: 1,
    title: "Empowering Your Business Online",
    description: "Discover how tailored web services can transform your business. Gain visibility, engage more customers, and drive growth.",
    image: "https://media.licdn.com/dms/image/v2/D5612AQHem395Sv5Rkg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703259144773?e=1741824000&v=beta&t=naBfqwUW0EvtQXssXn8ybRfKwArZbbNF0-KaPLk8V7c", // Replace with actual image URL
    link: "https://www.linkedin.com/pulse/empowering-your-local-business-comprehensive-guide-sustainable-miah-v9kpc/",
    button: "Free Consultation"
  },
  {
    id: 2,
    title: "Bills Management",
    description: "Easily manage, pay, and reconcile business bills with a streamlined solution.",
    image: "https://d274cmdd0goq94.cloudfront.net/wp-content/uploads/2022/04/Finance_Bill-Management-App-Development-1.png", // Replace with actual image URL
    link: "https://www.octalsoftware.com/blog/develop-bill-management-app",
    button: "Show as List"
  },
  {
    id: 3,
    title: "Online Money Exchange",
    description: "Exchange money securely with real-time updates and seamless transactions.",
    image: "https://nulledscripts.net/public/images/media/nulledscripts_net/img_168952564720.webp", // Replace with actual image URL
    link: "https://nulledscripts.net/item/893/money-exchange-script-20",
    button: "Show Balance"
  },
  {
    id: 4,
    title: "Customer Insights",
    description: "Analyze customer behavior and gain actionable insights to improve your services.",
    image: "https://leaphumanx.com/wp-content/uploads/sites/6/Human_Blog-Insights_1600x900.png", // Replace with actual image URL
    link: "https://www.aimtechnologies.co/what-is-customer-insight-the-secrets-to-business-success/",
    button: "Learn More"
  },
  {
    id: 5,
    title: "Advanced Analytics",
    description: "Leverage cutting-edge analytics to stay ahead in your industry.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISTaJFpC77iZEefHQvpSMtCI7CG6rWs_XSw&s", // Replace with actual image URL
    link: "/advanced-analytics",
    button: "Explore Now"
  },
  {
    id: 6,
    title: "Team Collaboration Tools",
    description: "Boost productivity with our innovative team collaboration solutions.",
    image: "https://www.ziflow.com/hs-fs/hubfs/27%20icons%20of%20online%20collaboration%20tools%20for%20creative%20teams%20in%20a%20grid.webp?width=1080&height=612&name=27%20icons%20of%20online%20collaboration%20tools%20for%20creative%20teams%20in%20a%20grid.webp", // Replace with actual image URL
    link: "https://www.ziflow.com/blog/online-collaboration-tools",
    button: "Get Started"
  }
];

const PromotionalSwiper = () => {
  return (
    <div className="bg-[#151515] text-white py-14 px-6 md:px-16">
      <h2 className="text-3xl md:text-5xl font_header text-center text-[#A91D3A] mb-12">Empowering Your Business Online</h2>
      <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-16">
        Discover tailored services to grow your business. Increase visibility, engage customers, and achieve success with powerful online solutions.
      </p>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {promotionalData.map((promo) => (
          <SwiperSlide key={promo.id}>
            <div className="bg-[#1e1e1e] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-6">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#A91D3A] mb-2">{promo.title}</h3>
              <p className="text-gray-300 mb-4">{promo.description}</p>
              <a
                href={promo.link}
                className="block w-full bg-[#A91D3A] text-white text-center py-3 rounded-md font-medium hover:bg-[#9c1631] transition-colors"
              >
                {promo.button}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

         {/* Navigation buttons below the cards */}
         <div className="flex justify-center gap-4 mt-1 md:mt-6">
          <button className="prev  text-[#ff5c8d] p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="next  text-[#ff5c8d] p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
    </div>
  );
};

export default PromotionalSwiper;
