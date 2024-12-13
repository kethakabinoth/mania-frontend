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
        <div className="productdisplay-right-stars">
          {/* Replace static icons with dynamic stars based on rating */}
          {[...Array(4)].map((_, index) => (
            <img key={index} src={star_icon} alt="Star" />
          ))}
          <img src={star_dull_icon} alt="Star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">Rs{product.old_price}</div>
            <div className="productdisplay-right-price-new">Rs{product.new_price}</div>

        </div>
        <div className="productdisplay-right-description">
        A comfortable and stylish shirt made from high-quality fabric, perfect for casual or formal wear. Designed for a great fit and lasting durability.
        </div>
        <div className="prductdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-shirt , Croptop</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern,Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;

