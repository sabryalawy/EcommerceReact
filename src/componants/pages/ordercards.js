import React from "react";
import {Link} from "react-router-dom";

const OrderCard =({order})=>{

    console.log(order);

    const geturlc=()=>{
        return "/detailsorder/"+order.id;
    }
    return(
        <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 d-inline-flex">
        <div className="card-body">
          <h5 className="card-title">Order</h5>
          <p className="card-text">ID : {order.id}</p>
          <p className="card-text mr-2">warehouse : {order.warehouse.id}</p>
          <Link className="btn btn-primary " to={()=>geturlc()}>Details</Link>
        </div>
      </div>
    );
}

export default OrderCard;