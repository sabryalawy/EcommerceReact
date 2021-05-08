import React, { useState, useEffect } from 'react';
import ProductCard from "./productcard";
import ax from "axios";


const Product=({customer})=>{

    const [products,setProducts]=useState();
   
    useEffect( () => {
       fetch("http://localhost:8080/product").then((rez)=>(rez.json()).then(setProducts));
    }, []);


    if (products === undefined) {
        return <h1>wite</h1>;
      }
        return (
        <div>
            <h1 className="text-center">Products</h1>
            {products.map((pro)=> <ProductCard key={pro.id} product={pro} customer={customer}/>)
            }

        </div>);
};

export default Product;