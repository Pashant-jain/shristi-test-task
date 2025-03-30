import React from 'react';
import PopularGames from '../components/PopularGames/';
import SocialMedia from '../components/SocialMedia';
import Subscribe from "../components/Subscribe"
import Footer from "../components/Footer"
import Banner from '../components/banner';
import ReferCards from '../components/ReferCards';

const LandingPage = () => {
  return (
    <div>
      <Banner/>
      {/* <Dashboard /> */}
      <ReferCards />
      <PopularGames />
      <Subscribe />
      <SocialMedia />
      
      <Footer />
    </div>
  );
};

export default LandingPage;
