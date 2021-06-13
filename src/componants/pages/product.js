import React, { useState, useEffect } from 'react';
import ProductCard from "./productcard";
import ax from "axios";


const Product=({customer})=>{

    const [products,setProducts]=useState();
   
    useEffect( () => {
       fetch("https://rcir625wwg.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_Product").then((rez)=>(rez.json()).then(setProducts));
    }, []);


    if (products === undefined) {
        return <h1>wite</h1>;
      }
        return (
        <div>
            <h1 className="text-center">Products</h1>
            {products.map((pro)=> <ProductCard key={pro.ID} product={pro} customer={customer}/>)
            }

        </div>);
};

export default Product;