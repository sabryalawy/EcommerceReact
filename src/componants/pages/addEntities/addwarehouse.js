import React, { useState } from 'react';
import ax from "axios";



const AddWarehouse = () => {
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [phoneNO, setPhoneNo] = useState();
    const [capacity, setCapacity] = useState();

    const saveWarehouse = () => {
        ax.post("https://2wgubgo8s2.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_Warehouse", JSON.stringify({
            TableName: "BZU13_ecommerce",
            Item:
            {
                address: address,
                city: city,
                type: "warehouse",
                phoneNO: phoneNO,
                capacity: capacity,
                date:new Date().toString()
            }
        }))
            .then(() => alert('Thank you for adding a warehouse!'))
    }

    return (
        <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 ">
            <div className="card-body">
                <h5 className="card-title">Add Warehouse</h5>
                <label>City:</label>
                <input type="text" className="m-2" id="city" onChange={e => setCity(e.target.value)} /><br />
                <label>Address:</label>
                <input type="text" className="m-2" id="address" onChange={e => setAddress(e.target.value)} /><br />
                <label>Phone Number:</label>
                <input type="text" className="m-2" id="phoneNumber" onChange={e => setPhoneNo(e.target.value)} /><br />
                <label>Capacity:</label>
                <input type="text" className="m-2" onChange={e => setCapacity(e.target.value)} /><br />
                <button className="btn btn-primary" onClick={() => saveWarehouse()} >Save Warehouse</button>
            </div>
        </div>
    );
}

export default AddWarehouse;