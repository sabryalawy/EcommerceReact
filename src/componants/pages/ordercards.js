import React from "react";
import {Link} from "react-router-dom";

const OrderCard =({order})=>{

    console.log(order);

    const geturlc=()=>{
        return "/detailsorder/"+order.ID;
    }
    return(
        <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 d-inline-flex">
        <div className="card-body">
          <h5 className="card-title">Order</h5>
          <p className="card-text">ID : {order.ID}</p>
          <p className="card-text mr-2">warehouse : {order.wid}</p>
          <Link className="btn btn-primary " to={()=>geturlc()}>Details</Link>
        </div>
      </div>
    );
}

export default OrderCard;