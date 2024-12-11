import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;

  // Handle undefined product gracefully
  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {/* Assuming multiple images exist */}
          {[product.image, product.image, product.image, product.image].map((img, index) => (
            <img key={index} src={img} alt={`Thumbnail ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="productdisplay-img">
        <img className="productdisplay-main-img" src={product.image} alt={product.name} />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          {/* Replace static icons with dynamic stars based on rating */}
          {[...Array(4)].map((_, index) => (
            <img key={index} src={star_icon} alt="Star" />
          ))}
          <img src={star_dull_icon} alt="Star" />
          <p>(122)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

