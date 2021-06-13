import React, { useState } from 'react';
import ax from "axios";

const AddProductToWarehouse=()=>{
    const [warehouse,setWarehouse]= useState();
    const [product,setProduct]= useState();
    const [capacity,setCapacity]= useState();


    const saveProductToWareHouse=()=>{
        console.log(warehouse,product);
        ax.post("https://4mykky7yef.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_WarehouseProduct", JSON.stringify({
            TableName: "BZU13_ecommerce",
            Item:
            {
                wid:warehouse,
                pid:product,
                type: "warehouseproduct",
                date:new Date().toString()
            }
        })) .then(() => alert('Thank you for adding product to a warehouse!'))
    }
    
    return (
        <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 ">
        <div className="card-body">
            <h5 className="card-title">Add Product To Warehouse</h5>
            <label>WareHouse ID:</label>
            <input type="text" className="m-2" id="warehouse" onChange={e=>setWarehouse(e.target.value)}/><br/>             
            <label>Product ID:</label>
            <input type="text" className="m-2" id="address" onChange={e=>setProduct(e.target.value)}/><br/>
            <label>Capacity:</label>
            <input type="text" className="m-2" id="address" onChange={e=>setCapacity(e.target.value)}/><br/>

            <button className="btn btn-primary " onClick={()=>saveProductToWareHouse()}>Save Product in to a WareHouse</button>
        </div>
        </div>
    );
}

export default AddProductToWarehouse;
