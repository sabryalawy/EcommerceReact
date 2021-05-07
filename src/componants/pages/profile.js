import React, { useEffect, useState } from "react";
import OrderCards from "./ordercards";
import OrderCard from "./ordercards";

const Profile=({customer})=>{

    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/order/customerorders/'+customer.id).then(rez=>rez.json()).then(rezz=>setOrders(rezz))
    });

    const orderCards=()=>{

    }

    if(orders===undefined)
        return <h1>please waite</h1>

    return(
        <div>
            <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 ">
                <div className="card-body">
                <h5 className="card-title">ID: {customer.id}</h5>
                <p className="card-text">User Name: {customer.userName}</p>
                <p className="card-text">First Name: {customer.fName}</p>
                <p className="card-text">Last Name: {customer.lName}</p>
                </div>
            </div>
            {   orders.map(o=>{
                    return <OrderCard key={o} order={o}/>
                })
            }
        </div>
    );
};

export default Profile;