import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';

function Review () {
    const [cart , setCart] = useState([]);
    const [orderPlace, setorderPlace] = useState(false);
    const placedOrder = () => {
        
        setCart([]);
        setorderPlace(true);
        processOrder();
    }
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
    let thankyou;
    if (orderPlace){
        thankyou = <img src={happyImage} alt=""/>;
    }
    return(
        <div className='twin-container'> 
          <div className="product-container">
          {
                cart.map(pd => <ReviewItem product = {pd} removeProduct={removeProduct}></ReviewItem>)
            }
          {
              thankyou
          }
          </div>
          <div className="cart-container">
              <Cart cart={cart}>
                  <button className='cart-btn' onClick={placedOrder}>Place Order</button>
              </Cart>
          </div>
        </div>
    )
};
export default Review;