 import React from 'react';
 
 const Cart = (props) => {
     const cart = props.cart;

     const convertNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
}
     let totalPrice = cart.reduce((total,perCart) => {
        return total+perCart.price
        },0);

    let shipping = 0;
    if (totalPrice > 35){
        shipping = 0;
    }else if (totalPrice > 15){
        shipping = 4.99;
    }else if (totalPrice > 0){
        shipping = 12.99;
    };

    const tax = totalPrice * 0.1;


    const grandTotal = totalPrice + shipping + convertNumber(tax);
  
     return (
         <div>
             <h2>Order review </h2>
             <p>Number of Items: {cart.length} </p>
             <p>Shipping: {convertNumber(shipping)}</p>
             <p>Total before tax: {convertNumber(totalPrice)} </p>
             <p>Tax: {convertNumber(tax)} </p>
             <h4>Grand total: {convertNumber(grandTotal)}</h4>
              
         </div>
     );
 };
 
 export default Cart;