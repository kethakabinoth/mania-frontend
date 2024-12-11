import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_product } = useContext(ShopContext); // Get all products from context
  const { productId } = useParams(); // Get the product ID from the URL
  const product = all_product?.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      </div>
    )    
}

export default Product
