import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WaerhouseDetails=({match})=>{
    const [warehouse,setWarehouse]= useState();
    const [products,setProducts] = useState([]);
    
    const getTheProducts=()=>{
        console.log(match);
        fetch('http://localhost:8080/warehouse/'+match.params.wid).then(rez=>rez.json()).then(rezz=>setWarehouse(rezz))
    };



    useEffect(async ()=>{
       await getTheProducts();

        // console.log(warehouse,products);
    },[]);

    if(warehouse===undefined||products===undefined)
        return <h1>please waite</h1>
    return(
        <div>
            <h1 className='text-center'>warehouse Detailes</h1>
                <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 ">
                    <div className="card-body">
                        <h5 className="card-title">warehouse ID: {warehouse.id}</h5>
                        <p className="card-text">warehouse City: {warehouse.city} </p>
                        <p className="card-text">warehouse Address: {warehouse.address}</p>
                        <p className="card-text">warehouse #NO: {warehouse.phoneNO}</p>
                        <p className="card-text mr-2">warehouse Capacity: {warehouse.capacity} </p>
                        
                    </div>
                </div>                
        </div>
    );
}

export default WaerhouseDetails;