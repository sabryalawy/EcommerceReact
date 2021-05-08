import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ProductCard=({product,customer})=>{

  const [warehouse,setWarehouse]=useState([]);

  useEffect( ()=>{
      fetch("http://localhost:8080/product/warehouse/"+product.id).then(rez=>rez.json()).then(rezz=>{setWarehouse(rezz)
      });
  },[]);

  const getHLink=()=>{
   return customer===null ? "/signin": "/details/"+product.id+"/"+customer.id;
  }

  if (warehouse===null) {
      return <p>please waite</p>
  }
  return(
  <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 d-inline-flex">
    <div className="card-body">
    <h5 className="card-title">{product.brand}</h5>
    <h5 className="card-title">ID: {product.id}</h5>
      <p className="card-text">{product.name}</p>
      <p className="card-text d-inline-flex mr-2">{product.price} $ </p>
      <Link className="btn btn-primary " to={()=> getHLink() }>Order</Link>
    </div>
  </div>

  );

}

export default ProductCard