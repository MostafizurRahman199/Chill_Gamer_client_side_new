import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopReviewers = () => {
  const [topReviewers, setTopReviewers] = useState([]);

  const topReviewersData = [
    {
      
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jsTip7YsPxi6INBL1UCWa_HpPcdnzPA80w&s",
      category: "Diamond", // Category for the reviewer
    },
    {
     
      imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-the-character-wearing-headphones-with-an-ear-piercing-in-his-head-image_2919756.jpg",
      category: "Platinum", // Category for the reviewer
    },
    {
      
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/022/189/642/small_2x/portrait-of-an-emo-girl-virtual-reality-gamer-generative-ai-free-photo.jpg",
      category: "Gold", // Category for the reviewer
    },
    {
      
      imageUrl: "https://imgcdn.stablediffusionweb.com/2024/3/17/5cf43290-e7d4-4380-8675-9c8b1d562dde.jpg",
      category: "Silver", // Category for the reviewer
    },
    {
     
      imageUrl: "https://image.winudf.com/v2/image1/Y29tLkdhbWluZy5Qcm9maWxlUGljdHVyZXNfc2NyZWVuXzBfMTY4OTg4MzkyM18wOTc/screen-0.jpg?fakeurl=1&type=.jpg",
      category: "Bronze", // Category for the reviewer
    },
  ];
  

  useEffect(() => {
    // Fetch top reviewers from the backend
    axios
      .get('http://localhost:5000/topReviewers')  // Adjust the endpoint if necessary
      .then((response) => {
        setTopReviewers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching top reviewers:', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-[#A91D3A] text-center mb-6">Top 5 Reviewers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  justify-items-end gap-6">
        {topReviewers.map((reviewer, index) => (
          <div
          key={index}
          className="bg-[#1A1A1A] rounded-lg shadow-2xl p-20 shadow-[#A91D3A] hover:scale-105 transition-all duration-300 mask mask-hexagon-2"
        >
         
          <div className="flex justify-center mb-1  ">
          <img className="mask mask-hexagon w-20 h-20  object-cover" src={topReviewersData[index].imageUrl} />
          </div>
        
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#A91D3A]">{reviewer.userName}</h3>
            
            <p className="text-lg text-gray-300">Point: {reviewer.count}</p>
            <p className="text-xl text-gray-300 text-shadow-strong">
  {topReviewersData[index].category}
</p>

          </div>
        </div>
        

  
        ))}
      </div>
    </div>
  );
};

export default TopReviewers;
