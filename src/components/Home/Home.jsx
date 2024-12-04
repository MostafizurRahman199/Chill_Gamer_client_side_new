import React from 'react'
import Banner from './Banner'
import Reviews from './Reviews'
import HightestRatedGame from './HightestRatedGame'
import TopReviewers from './TopReviewers'


const Home = () => {
  return (
    <div>
        <Banner />
        {/* <TopBrands />
        <BrandSell />
        <FeaturedCategories />
        <WhyChooseUs /> */}
        <HightestRatedGame></HightestRatedGame>
        <TopReviewers></TopReviewers>
        <Reviews />
    </div>
  )
}

export default Home