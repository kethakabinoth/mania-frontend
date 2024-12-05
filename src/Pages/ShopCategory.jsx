import React from 'react';
import './css/ShopCategory.css';

const ShopCategory = (props) => {
    return (
        <div className="shop-category">
            <img src={props.banner} alt="Shop category banner" />
        </div>
    );
};

export default ShopCategory;


