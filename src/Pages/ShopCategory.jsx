import React, { useContext } from 'react';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import './css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/item/Item'; // Ensure the path and case match


const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img className='shopcategory-baneer' src={props.banner} alt="Shop category banner" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="Dropdown icon" />

                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, index) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;
