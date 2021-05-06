import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin=(props)=>{
    const [userName,setUserName]=useState(null);
    const [password,setPassword]=useState(null);
    const logout=props.logout;
    if(logout){
        props.changecustomer(null);
    }//jajajajaj-2

    const test=(e)=>{
    
        var customer;
        fetch("http://localhost:8080/customer/"+userName).then(rez=>rez.json()).then(rezz=>{
            customer=rezz;
            if (customer.password===password) {
                props.changecustomer(customer)
            }
        });
    }
    return (
        
        <div>
            <h1 className="text-center m-5">Sign In</h1>
            <div className="text-center m-5">
            <label>User Name:</label>
            <input type="text" className="m-2" id="username" onChange={e=>setUserName(e.target.value)}/><br/>             
            <label>Password:</label>
            <input type="password" className="m-2" onChange={e=>setPassword(e.target.value)}/><br/> 
            <Link to="/products"><button onClick={(e)=>test(e)}>Sign in</button></Link>
            </div>
        </div>
    );
};

export default Signin;