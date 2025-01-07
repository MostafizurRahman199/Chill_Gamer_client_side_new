import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoDiamondOutline } from 'react-icons/io5';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from "lottie-react";
import Aos from 'aos';

import diamond from "../../../public/first.json";
import platinum from "../../../public/platinum.json";
import gold from "../../../public/gold.json";
import silver from "../../../public/silver2.json";
import bronze from "../../../public/bronze.json";

const TopReviewers = () => {
  const [topReviewers, setTopReviewers] = useState([]);


  const style = {
    height: 50,
  };
  
//   const interactivity = {
//     mode: "scroll",
//     actions: [
//       {
//         visibility: [0, 0.2],
//         type: "stop",
//         frames: [0],
//       },
//       {
//         visibility: [0.2, 0.45],
//         type: "seek",
//         frames: [0, 45],
//       },
//       {
//         visibility: [0.45, 1.0],
//         type: "loop",
//         frames: [45, 60],
//       },
//     ],
//   };

  const topReviewersData = [
    {
      
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jsTip7YsPxi6INBL1UCWa_HpPcdnzPA80w&s",
      category: "Diamond", // Category for the reviewer
    //   icons: "https://i.ibb.co.com/zrjZJxg/diamond.png",
    icons:diamond,
    },
    {
     
      imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-the-character-wearing-headphones-with-an-ear-piercing-in-his-head-image_2919756.jpg",
      category: "Platinum",

       // Category for the reviewer
       // Category for the reviewer
        //  icons: "https://i.ibb.co.com/1rsDg4h/platinum.png"
        icons:platinum,
    },
    {
      
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/022/189/642/small_2x/portrait-of-an-emo-girl-virtual-reality-gamer-generative-ai-free-photo.jpg",
      category: "Gold", // Category for the reviewer
    //   icons: "https://i.ibb.co.com/BCZ1Pwf/gold.png"
    icons:gold,
    },
    {
      
      imageUrl: "https://imgcdn.stablediffusionweb.com/2024/3/17/5cf43290-e7d4-4380-8675-9c8b1d562dde.jpg",
      category: "Silver", // Category for the reviewer
    //   icons: "https://i.ibb.co.com/tXKjSNJ/silver.png"
    icons:silver,
    },
    {
     
      imageUrl: "https://image.winudf.com/v2/image1/Y29tLkdhbWluZy5Qcm9maWxlUGljdHVyZXNfc2NyZWVuXzBfMTY4OTg4MzkyM18wOTc/screen-0.jpg?fakeurl=1&type=.jpg",
      category: "Bronze", // Category for the reviewer
        //   icons: "https://i.ibb.co.com/8jT9hy6/bronze.png"
        icons:bronze,

    },
  ];
  

  useEffect(() => {
    // Fetch top reviewers from the backend
    axios
      .get('https://chillgamer2025.vercel.app/topReviewers')  // Adjust the endpoint if necessary
      .then((response) => {
        setTopReviewers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching top reviewers:', error);
      });
  }, []);


  useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);

  return (
    <div className="w-full mx-auto px-4 py-8  bg-[#000000] my-20">
      <h1 className="font_header text-3xl md:text-5xl h-[100px]  font-bold text-[#A91D3A] text-center my-6">

      <span style={{ color: '#A91D3A', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Top 5 Reviewer', 'Top 5 Reviewer', ' Diamond'," Platinum", " Gold", " Silver", " Bronze",'Top 5 Reviewer' ]}
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


      </h1>
      <div className="flex flex-wrap mx-auto justify-center gap-4 " 
      
      data-aos="fade-in"
      // data-aos-anchor="#example-anchor"
      // data-aos-offset="500"
      // data-aos-duration="500"
      
      >
        {topReviewers.map((reviewer, index) => (
         <div className='mask mask-hexagon-2  bg-[#A91D3A] shadow-2xl'>

      <div
          key={index}
          className="bg-[#1A1A1A] rounded-lg  p-20 shadow-custom hover:scale-95 transition-all duration-300 mask mask-hexagon-2"
        >
         
          <div className="flex justify-center mb-1  ">
          <img className="mask mask-hexagon w-20 h-20  object-cover shadow-custom" src={topReviewersData[index].imageUrl} />
          </div>
        
          <div className="text-center ">
            <h3 className="text-xl font-semibold text-[#A91D3A]">{reviewer.userName.split(" ")[0]}</h3>
            
            <p className="text-lg text-gray-300">Point: {reviewer.count}</p>

        <div className='flex flex-col justify-center items-center'>
            {/* <img src={topReviewersData[index].icons} alt="" className='w-10' /> */}
            <Lottie
      animationData={topReviewersData[index].icons}
      style={style}
    //   interactivity={interactivity}
    />
        <p className="text-xl text-gray-300 text-shadow-strong">
             {topReviewersData[index].category}</p>
        </div>
          </div>
        </div>
         </div>
        

  
        ))}
      </div>
    </div>
  );
};

export default TopReviewers;



