import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Product = (props) => {
    const{name,img,seller,price,stock,key} = props.product;
    return (
        <div className='product-detail'>
            <div><img src={img} alt=""/></div>
            <div>
                <Link to={`/product/${key}`}>{name}</Link>
                <p>by: {seller}</p>
                <p>Price: ${price}</p>
                <p>Only {stock} left in stock- Order Now</p>
                {
                    props.useButton && <button className='cart-btn' onClick={()=>{props.handler(props.product)}}> <FontAwesomeIcon icon= {faShoppingCart}/> Add to craft</button>
                }
            </div>
        </div>
    );
};

export default Product;