 import React from 'react';
 
 const Cart = (props) => {
     const cart = props.cart;

     const convertNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
}
    //  let totalPrice = cart.reduce((total,perCart) => {
    //     return total+perCart.price*perCart.quantity;
    //     },0);
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    // end
    let shipping = 0;
    if (total > 35){
        shipping = 0;
    }else if (total> 15){
        shipping = 4.99;
    }else if (total > 0){
        shipping = 12.99;
    };

    const tax = total * 0.1;
    
    const grandTotal = total+ shipping + convertNumber(tax);
     return (
         <div>
             <h2>Order review </h2>
             <p>Number of Items: {cart.length} </p>
             <p>Shipping: {convertNumber(shipping)}</p>
             <p>Total before tax: {convertNumber(total)} </p>
             <p>Tax: {convertNumber(tax)} </p>
             <h4>Grand total: {convertNumber(grandTotal)}</h4>
             <br/>
             {
               props.children
             }
         </div>
     );
 };
 
 export default Cart;