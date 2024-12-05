import React from 'react'
import Banner from './Banner'
import Reviews from './Reviews'
import HightestRatedGame from './HightestRatedGame'
import TopReviewers from './TopReviewers'
import Contact from './Contact'
import { ThemeProvider } from '../../Auth/ThemeContext'
import WebsiteReview from './WebsiteReview'



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
        <Contact></Contact>
        <Reviews />
        <WebsiteReview></WebsiteReview>
    </div>

  )
}

export default Home