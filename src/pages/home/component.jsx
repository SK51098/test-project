import React from 'react';
import HeroBanner from './components/hero-banner';
import Offers from './components/offers'
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
      </header>
    </div>
  );
};

export default Home;
