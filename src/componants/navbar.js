import React from "react";
import { Link } from "react-router-dom";
import * as BootStrap from 'react-bootstrap';

const Navbar=({navbarElements,isAdmin,changecustomer,setisAdmin,customer})=>{

    const ifLogout=(e)=>{
        console.log(e.target.name);
        if (e.target.name==='logoutn') {
            setisAdmin(false);
            changecustomer(null);
        }

    }

    const adminNav=()=>{
        if(customer!=null||customer!=undefined){
            if (customer.userName==='admin') {
                
                return(<BootStrap.Dropdown>
                    <BootStrap.Dropdown.Toggle variant="success" id="dropdown-basic">
                        Admin Othoroty
                    </BootStrap.Dropdown.Toggle>
        
                    <BootStrap.Dropdown.Menu>
                        <BootStrap.Dropdown.Item ><Link to='/addproduct'>add Product</Link></BootStrap.Dropdown.Item>
                        <BootStrap.Dropdown.Item ><Link to='/addwarehouse'>add warehouse</Link></BootStrap.Dropdown.Item>
                        <BootStrap.Dropdown.Item ><Link to='/addproducttowarehouse'>add product to warehouse</Link></BootStrap.Dropdown.Item>
                    </BootStrap.Dropdown.Menu>
                </BootStrap.Dropdown>);
            }
        }
    }

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">

        <div className="collapse navbar-collapse text-right" id="navbarNav">
            <h1 className="navbar-brand">Ecommercial</h1>
            <ul className="navbar-nav text ">
                {navbarElements.map((e)=><li className="nav-item active"  name={e} key={e}><Link to={'/'+e} name= {e+'n'} key={e+'l'} onClick={(e)=>ifLogout(e)} className="nav-link">{e}</Link></li>)}
            </ul>
        </div>
        {adminNav()}
    </nav>);
};

export default Navbar;