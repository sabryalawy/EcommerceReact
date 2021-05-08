import React, { useEffect } from "react";
import {Link} from 'react-router-dom'

const WarehouseCard = ({warehouse})=>{

    const getHLinke=()=>{
        return '/warehousedetails/'+warehouse.id;
    }



    return (
        <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 d-inline-flex">
        <div className="card-body">
          <h5 className="card-title">warehouse ID: {warehouse.id}</h5>
          <p className="card-text">warehouse City: {warehouse.city}</p>
          <p className="card-text mr-2">warehouse Capacity: {warehouse.capacity}</p>
          <Link className="btn btn-primary " to={()=>getHLinke()} >Details</Link>
        </div>
      </div>

    );
}

export default WarehouseCard;