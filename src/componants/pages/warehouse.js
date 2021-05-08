import React, { useEffect, useState } from "react";
import WarehouseCard from './warehousecard';


const Warehouse=()=>{


    const [warehouses,setWarehouse] = useState();
    useEffect( ()=>{
   
         fetch('http://localhost:8080/warehouse').then(rez=>rez.json()).then(rezz=>setWarehouse(rezz));
    },[]);

    if(warehouses===undefined)
        return <h1>please waite</h1>;

    return(<div>
        <h1 className="text-center">Warehouse</h1>

        {
            warehouses.map((wh)=><WarehouseCard key={wh.id} warehouse={wh} />)
        }
    </div>);
};

export default Warehouse;