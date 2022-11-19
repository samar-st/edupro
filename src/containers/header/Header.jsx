import React from 'react';
import people from '../../assets/people.png';
import coin from '../../assets/comp.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">O'rganing, o'rgating va daromad toping</h1>
      <p>Ushbu onlayn ta'lim platforma turli mavzular, elektron kitoblar va o'quv kurslar bo'yicha  materiallardan iborat</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src="https://www.sessionlab.com/wp-content/uploads/training_gb-1024x680.png" />
    </div>
  </div>
);

export default Header;
