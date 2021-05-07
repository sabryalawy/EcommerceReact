import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ax from "axios";
import Profile from "./profile";
import Product from "./product"

const Details=({match})=>{
    const [product,setProduct] = useState(null);
    const [order,setOrder] = useState(null);
    var warehouse;


    const getWarehouse=()=>{
        fetch("http://localhost:8080/product/warehouse/"+match.params.id)
        .then((rez)=>rez.json())
        .then((rezz)=>{
            warehouse=rezz;
        })
    }

    useEffect(async ()=>{
       await getWarehouse();
        
        fetch('http://localhost:8080/product/'+match.params.id).then(rez=>rez.json()).then(rezz=>setProduct(rezz)).then(()=>setOrder({
            "warehouse":{"id":warehouse[0].wareHouse},
            "customer":{"id":match.params.cid},
            "products":[{"id":match.params.id}]
        }));
        
    },[]);
    
    const handleMakeOrder = ()=>{
        
        ax.post("http://localhost:8080/order", JSON.stringify(order))
        .then(() => alert('Thank you for subscribing!'))
    }

    if(product===null)
        return <h1>pleasewaite</h1>;
    return(

        <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 ">
        <div className="card-body">
          <h5 className="card-title">{product.brand}</h5>
          <p className="card-text">{product.name}</p>
          <p className="card-text">Serial: {product.serial}</p>
          <p className="card-text d-inline-flex mr-2">{product.price} $ </p>
          <button className="btn btn-primary " onClick={()=>handleMakeOrder()} >Order</button>
        </div>
        </div>
    );
}

export default Details;