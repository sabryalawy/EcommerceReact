import React, { useEffect, useState } from "react";
import OrderCards from "./ordercards";
import OrderCard from "./ordercards";

const Profile=({customer})=>{

    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://wfy59p2k56.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_Order?cid='+customer.ID).then(rez=>rez.json()).then(rezz=>setOrders(rezz))
    });



    if(orders===undefined)
        return <h1>please waite</h1>

    return(
        <div>
            <h1 className="text-center">profile</h1>
            <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 ">
                <div className="card-body">
                <h5 className="card-title">ID: {customer.ID}</h5>
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