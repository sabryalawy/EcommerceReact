import React, { useState, useEffect } from 'react';
import ProductCard from "./productcard";
import ax from "axios";


const Product=({customer})=>{
    const [products,setProducts]=useState();
   
    const getallProducts=async ()=>{
        return await ax.get("http://localhost:8080/product").then((rez)=>(rez.data));
    }
   
    useEffect(() => {
        const abortCtrl = new AbortController();
        const opts = { signal: abortCtrl.signal };
      
        fetch('http://localhost:8080/product', opts)
          .then((response) => response.json())
          .then((data) => 
          {
              setProducts(data)
            return abortCtrl.abort();
        })
          .catch((error) => console.log(error.message));
      
        
      }, []);


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