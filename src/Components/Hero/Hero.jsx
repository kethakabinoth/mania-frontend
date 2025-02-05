import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import new_logoN from '../Assets/new_logoN.png'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
        <div className="new_logoN">
         <p>𝑩𝒆 𝑩𝒐𝒍𝒅</p>
         
         </div>

          <p>𝑩𝒆 𝑺𝒕𝒚𝒍𝒊𝒔𝒉  </p>
          <p>𝓑𝓮 𝓜𝓪𝓷𝓲𝓪</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={new_logoN} alt="" />
      </div>
    </div>
  );
}

export default Hero;

