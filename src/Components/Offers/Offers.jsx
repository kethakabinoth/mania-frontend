import React from 'react'
import './Offers.css'
import black_girl_t from '../Assets/black_girl_t.png'

const Offers = () => {
  return (
    <div className='Offers'>
        <div className="Offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="Offers-right">
            <img src={black_girl_t} alt=""/>

        </div>
      
    </div>
  )
}

export default Offers
