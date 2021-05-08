import React, { useState } from 'react';
import ax from "axios";

const AddProduct=()=>{

    const [name,setName ] = useState();
    const [brand,setBrand] = useState();
    const [price,setPrice] = useState();
    const [serial,setSerial]=useState(); 

    const saveProduct=()=>{
        ax.post("http://localhost:8080/product", JSON.stringify({
            name:name,
            brand:brand,
            serial:serial,
            price:price
        }))
        .then(() => alert('Thank you product has been added!'))
    };


    return (
        <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 ">
        <div className="card-body">
          <h5 className="card-title">AddProduct</h5>
          <label>Name:</label>
          <input type="text" className="m-2" id="name" onChange={e=>setName(e.target.value)}/><br/>             
          <label>Brand:</label>
            <input type="text" className="m-2" id="brand" onChange={e=>setBrand(e.target.value)}/><br/>
            <label>Serial:</label>
            <input type="text" className="m-2" id="serial" onChange={e=>setSerial(e.target.value)}/><br/>
            <label>Price:</label>
            <input type="text" className="m-2" onChange={e=>setPrice(e.target.value)}/><br/> 
          <button className="btn btn-primary" onClick={()=>saveProduct()} >Save Product</button>
        </div>
        </div>
    );
}

export default AddProduct;