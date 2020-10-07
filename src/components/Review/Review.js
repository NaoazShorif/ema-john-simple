import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

function Review () {
    const [cart , setCart] = useState([]);
    const removeProduct = (productKey) =>{
            const restProduct = cart.filter(pd => pd.key !== productKey);
            setCart(restProduct);
            removeFromDatabaseCart(productKey)
    } 
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);
    return(
        <div className='twin-container'> 
          <div className="product-container">
          {
                cart.map(pd => <ReviewItem product = {pd} removeProduct={removeProduct}></ReviewItem>)
            }
          </div>
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    
    )
};
export default Review;