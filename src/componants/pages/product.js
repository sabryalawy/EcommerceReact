import React, { useState, useEffect } from 'react';
import ProductCard from "./productcard";


const Product=({customer})=>{
    const [products,setProducts]=useState();
   
   
    useEffect(()=>{
        fetch("http://localhost:8080/product").then((rez)=>rez.json()).then(rezz=>setProducts(rezz));
    });


    if (products === undefined) {
        return <h1>wite</h1>;
      }
        return (
        <div>
            <h1 className="text-center">Products</h1>
            {products.map((pro)=>{
                    return <ProductCard key={pro.id} product={pro} customer={customer}/>
                })
            }

        </div>);
};

export default Product;