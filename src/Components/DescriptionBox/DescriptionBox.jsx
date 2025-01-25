import React from 'react'
import './DescriptionBox.css'
 
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
           <div className="descriptionbox-nav-box">Description</div>
           <div className="descriptionbox-nav-box fade">Reviews (122)</div>  
        </div>
        <div className="descriptionbox-description">
            <p> An e-commerce website** is a platform for buying and selling products or services online, offering convenience and accessibility. It includes a product catalog with descriptions, prices, and reviews, along with search and filter options for easy navigation. Users can add items to a shopping cart, make secure payments via various methods, and track orders through their accounts. These websites are responsive across devices, ensuring a smooth experience. Advanced features like AI recommendations, AR for virtual try-ons, and robust security enhance functionality. Examples include Amazon, eBay, and Shopify.</p>
            <p> E-commerce websites are designed with responsive layouts to ensure a seamless experience across devices like desktops, tablets, and smartphones. They often include order management systems to handle inventory, shipping, and order confirmations while prioritizing security through SSL encryption and secure authentication. Advanced features may include personalized recommendations, AI-powered chatbots, augmented reality (AR) for virtual product try-ons, and machine learning to enhance user experiences. Popular examples of e-commerce platforms include Amazon, eBay, Shopify, and Alibaba. </p>
        </div>
          </div>
  )
}

export default DescriptionBox
