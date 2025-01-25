import React from 'react';
import Item from '../item/Item'; // Ensure you have this component defined and imported properly.

const RelatedProducts = ({ data_product }) => {
  // Check if data_product is empty or not loaded
  if (!data_product || data_product.length === 0) {
    return <div>No related products available.</div>;
  }

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="Relatedproducts-item">
        {data_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;



