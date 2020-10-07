import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

export default function ProductDetaile (){
    const {productKey} = useParams();
    const newProduct = fakeData.find((newpd)=>newpd.key===productKey);
    return(
       
        <Product useButton={false} product={newProduct}></Product>
    )
}