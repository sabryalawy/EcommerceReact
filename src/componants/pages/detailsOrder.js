import React, { useEffect, useState } from "react";

const DetailsOrder=({match})=>{

        const [order ,setOrder]=useState();
        
        useEffect(()=>{
                fetch('http://localhost:8080/order/'+match.params.oid).
                then((rez)=>rez.json()).
                then(rezz=>
                {
                        setOrder(rezz);
                        // console.log(order.value.date.time);
                }
                );
        },[]);


        if(order===undefined)
                return <h1>please waite</h1>

        return (
        <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 ">
                <div className="card-body">
                        <h5 className="card-title">Order ID: {order.value.id}</h5>
                        <p className="card-text">date: {order.value.date.date.year}/{order.value.date.date.month}/{order.value.date.date.day} </p>
                        <p className="card-text">time: {order.value.date.time.hour}:{order.value.date.time.minute}</p>
                        <p className="card-text">warehouse: {order.value.warehouse.city}</p>
                        <p className="card-text">product: {order.value.products[0].name}</p>
                        <p className="card-text">Total Price: {order.value.totalPrice}</p>
                </div>
        </div>
        );
   
}

export default DetailsOrder;