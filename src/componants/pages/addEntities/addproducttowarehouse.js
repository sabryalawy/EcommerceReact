import React, { useState } from 'react';
import ax from "axios";

const AddProductToWarehouse=()=>{
    const [warehouse,setWarehouse]= useState();
    const [product,setProduct]= useState();
    const [capacity,setCapacity]= useState();


    const saveProductToWareHouse=()=>{
        ax.post('http://localhost:8080/warehouse/addtowarehouse/'+warehouse+'/'+product+'/'+capacity).then(() => alert('Thank you for adding a warehouse!'));
    }
    
    return (
        <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 ">
        <div className="card-body">
            <h5 className="card-title">AddProductToWarehouse</h5>
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
