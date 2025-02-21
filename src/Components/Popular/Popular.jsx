import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../item/Item'; // Case-sensitive



const Popular = () => {
  return (
    <div className='Popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="Popular-item">
      {data_product.map((item, i) => (
  <Item
    key={item.id || i} // Prefer `item.id` if available, fallback to index
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

export default Popular;


