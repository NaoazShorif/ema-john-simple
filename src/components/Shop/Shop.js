import React, { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';


const Shop = () => {
    const data10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(data10);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        // console.log(savedCart);
        const keys = Object.keys(savedCart);
        const products = keys.map ( perKey => {
            const matchedProduct = fakeData.find(pd => pd.key === perKey);
            matchedProduct.quantity = savedCart[perKey];
            console.log(matchedProduct);
            return matchedProduct;
        })
        setCart(products);

    },[]);
    const handleCart = (product)=>{
        const key = product.key;
        const sameProduct = cart.find( pd=> pd.key===key);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== key);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count );
    }
    return (
        <div className = 'twin-container'>
            <div className="product-container">
                {
                  products.map((product)=> <Product key={product.key} useButton={true} product={product} handler={handleCart}></Product>)
                 }
            </div>
           <div className="cart-container">
              <Cart cart={cart}>
              <Link to='/review'>
                 <button className='cart-btn'>Review</button>
             </Link></Cart>           
           </div>
        </div>
    );
};

export default Shop;