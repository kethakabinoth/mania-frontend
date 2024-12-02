import React from 'react';
import './Popular.css';
import data_product from '../Asests/data';
import Item from '../item/item'; // Adjust the import to use uppercase `Item`

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, index) => (
          <Item key={item.id || index} id={item.id} name={item.name} image={item.image} new_price={item.new_price}old_price={item.old_price}/>
        ))}
      </div>
    </div>
  );
};

export default Popular;

