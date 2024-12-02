import React from 'react'
import './Hero.css'
import hand_icon from '../Asests/hand_icon.png'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="her0-left">
            <h2>NEW ARRIVALS ONLY</h2>

        </div>
        <div className="hero-righ">
            <p>new</p>
            <img src={hand_icon} alt=""/>


        </div>
        <p>collection</p>
        <p>for everyone</p>
     </div>
  )
}

export default Hero
