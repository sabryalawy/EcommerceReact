import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ax from "axios";

const Signup = () => {
    const [userName, setUserName] = useState();
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [password, setPassword] = useState();
    const [cPassword, setCPassword] = useState();
    const test = () => {
        if (password === cPassword) {
            ax.post("https://z6vcbb5u44.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_Customer", JSON.stringify({
                TableName: "BZU13_ecommerce",
                Item: {
                    type: "customer",
                    userName: userName,
                    password: password,
                    fName: fName,
                    lName: lName,
                    date:new Date().toString()
                }


            }))
                .then(() => alert('Thank you for subscribing!')).catch(e => console.log(e));
        }
    }

    return (
        <div>
            <div>
                <h1 className="text-center">Sign Up</h1>

                <div className="text-center m-5">
                    <label>First Name:</label>
                    <input type="text" className="m-2" id="fName" onChange={e => setFName(e.target.value)} /><br />
                    <label>Last Name:</label>
                    <input type="text" className="m-2" id="lName" onChange={e => setLName(e.target.value)} /><br />
                    <label>User Name:</label>
                    <input type="text" className="m-2" id="userName" onChange={e => setUserName(e.target.value)} /><br />
                    <label>Password:</label>
                    <input type="password" className="m-2" onChange={e => setPassword(e.target.value)} /><br />
                    <label>conferm password:</label>
                    <input type="password" className="m-2" onChange={e => setCPassword(e.target.value)} /><br />
                    <Link to="/signin"><button className='btn btn-primary' onClick={(e) => test(e)}>Sign Up</button></Link><br />

                </div>
            </div>
        </div>
    );
};

export default Signup;