import React from 'react';
import HeroBanner from './components/hero-banner';
import Offers from './components/offers'
import TopCategories from './components/top-categories';
import MustHave from './components/must-have';
import './styles.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <div className="superTopNav">
          <div className="superTopNavFlexContant d-flex">
            <button>Free Gift Wrapping</button>
            <div>|</div>
            <button>Easy & Free Returns</button>
            <div>|</div>
            <button>Student Discount</button>
            <div>|</div>
            <button>100&#37;  Secure Shopping</button>
          </div>
        </div>
        <HeroBanner />
        <Offers />
        <TopCategories />
        <MustHave />
      </header>
    </div>
  );
};

export default Home;
