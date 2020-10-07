import React from 'react';
 
export default function ReviewItem (props){
    const {name, quantity,key} = props.product;
    const reviewStyle = {
        padding: '10px',
        margin: '10px',
        borderBottom: '1px solid gray'
    }
    return (
        <div style = {reviewStyle}>
            <h4>Product Name: {name}</h4>
            <h4>Quantity: {quantity}</h4>
            <button className='cart-btn' onClick={()=>props.removeProduct(key)}>Remove</button>
        </div>
    )
};