import React from 'react'
import VerticalNav from '../Components/Portfolio/VerticalNav'
import HeroSection from '../Components/Portfolio/HeroSection'
import "../portfolio.css";
import Services from '../Components/Portfolio/Services';
import Education from '../Components/Portfolio/Education';
import Work from '../Components/Portfolio/Work';
import Portfolio from '../Components/Portfolio/Portfolio';


const Portfoliopage = () => {
  return (
    <div>
      <VerticalNav/>
      <HeroSection/>
      <Services/>
      <Education/>
      <Work/>
      <Portfolio/>
     
    </div>
  )
}

export default Portfoliopage