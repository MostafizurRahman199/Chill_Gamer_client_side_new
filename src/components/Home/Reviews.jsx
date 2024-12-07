import axios from "axios";
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [people, setPeople] = useState([]);

  const imageArray = [
    {
      
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jsTip7YsPxi6INBL1UCWa_HpPcdnzPA80w&s",
   
    },
    {
     
      imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-the-character-wearing-headphones-with-an-ear-piercing-in-his-head-image_2919756.jpg",
   
    },
    {
      
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/022/189/642/small_2x/portrait-of-an-emo-girl-virtual-reality-gamer-generative-ai-free-photo.jpg",
    
    },
    {
      
      imageUrl: "https://imgcdn.stablediffusionweb.com/2024/3/17/5cf43290-e7d4-4380-8675-9c8b1d562dde.jpg",
   
    },
    {
     
      imageUrl: "https://image.winudf.com/v2/image1/Y29tLkdhbWluZy5Qcm9maWxlUGljdHVyZXNfc2NyZWVuXzBfMTY4OTg4MzkyM18wOTc/screen-0.jpg?fakeurl=1&type=.jpg",
    

    },
  ];

  useEffect(() => {
 
    const fetchReviews = async () => {
      const response = await axios.get("https://chillgamermostafiz16.vercel.app/websiteReview");
      console.log(response.data);
      setReviews(response.data);
    };
    fetchReviews();
  }, []);




  useEffect(() => {
    
    const fetchPeople = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();

        setPeople(data.results);
      } catch (error) {
        console.error("Error fetching random people:", error);
      }
    };

    fetchPeople();
  }, []);

  const peopleImages = people.map((person) => (person.picture.large)
  )

  return (
    <div className="w-full  py-8">
      <h2 className="text-3xl h-[100px]  sm:text-3xl md:text-5xl font-bold  text-[#A91D3A] text-center my-6 ">
     <span style={{ color: '#A91D3A', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["People Says", "Chill Gamer's Community"]}
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
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className=" py-2 md:py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:h-[400px]"
      >
        <div className="flex gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#151515] rounded-3xl shadow-lg border border-[#A91D3A]  p-6 flex flex-col items-center text-center transition-transform hover:scale-105 mx-2 hover:border-[#151515]"
              style={{
                minWidth: "280px",
                maxWidth: "280px",
                flexShrink: 0, 
              }}
            >
            
              <img
                src={imageArray[index % 5].imageUrl}
                alt={review.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-[#151515] mb-4"
                onError={(e) => (e.target.src = "/fallback-user.png")}
              />

            
              <h3 className="text-lg font-bold text-[#A91D3A]">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500 italic mb-2">
                {review.profession}
              </p>

             
              <p className="text-gray-700 mb-4 line-clamp-3">
                {review.description}
              </p>

             
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={
                      starIndex < Math.floor(review.rating)
                        ? "#A91D3A"
                        : "#E4E4E4"
                    }
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.834L19.336 24 12 20.146 4.664 24l1.336-8.743L0 9.423l8.332-1.268z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-700">
                  {/* {review.rating.toFixed(1)} */}
                </span>
              </div>

             
              <p className="text-xs text-gray-400">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Reviews;
