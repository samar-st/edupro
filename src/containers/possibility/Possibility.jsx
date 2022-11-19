import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Get paid for your help <br /></h1>
      <p>This is a free website that consists of educational materials, 
        video courses and
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
