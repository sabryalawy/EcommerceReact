import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Signin=(props)=>{
    const [userName,setUserName]=useState(null);
    const [password,setPassword]=useState(null);
    const logout=props.logout;
    if(logout){
        props.changecustomer(null);
    }


    const test=(e)=>{
    
        if (userName==='admin'&&password==='admin') {
            props.isAdmin(true);
            props.changecustomer({
                id:0,
                userName:"admin",
                lName:"admin",
                fName:"admin",

            });
        }else{
            var customer;
            fetch("https://z6vcbb5u44.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_Customer?id="+userName+"").then(rez=>rez.json()).then(rezz=>{
                customer=rezz[0];
                if (customer.password===password) {
                    props.changecustomer(customer)
                }
            });
        }
    }
    return (
        
        <div>
            <h1 className="text-center m-5">Sign In</h1>
            <div className="text-center m-5">
            <label>User Name:</label>
            <input type="text" className="m-2" id="username" onChange={e=>setUserName(e.target.value)}/><br/>             
            <label>Password:</label>
            <input type="password" className="m-2" onChange={e=>setPassword(e.target.value)}/><br/> 
            <Link to="/products"><button className='btn btn-primary' onClick={(e)=>test(e)}>Sign in</button></Link><br/>
            <Link to='/signup' className='m-5'> Sign Up </Link>
            </div>
        </div>
    );
};

export default Signin;