// import React from 'react'

// const StarRating = () => {
//   return (
//     <div>StarRating</div>
//   )
// }

// export default StarRating


import React from 'react';

const StarRating = ({ rating }) => {
  const getStarType = (index) => {
    if (rating >= index + 1) return 'full';
    if (rating > index && rating < index + 1) return 'half';
    return 'empty';
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starType = getStarType(index);
        return (
          <span key={index} className="text-[#A91D3A]">
            {starType === 'full' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-5 sm:h-5"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.4 8.166L12 18.902l-7.334 3.85 1.4-8.166-5.934-5.787 8.2-1.193z" />
              </svg>
            )}
            {starType === 'half' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-5 sm:h-5"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.4 8.166L12 18.902V.587z" />
              </svg>
            )}
            {starType === 'empty' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-5 sm:h-5"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </svg>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
