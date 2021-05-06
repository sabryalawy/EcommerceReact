import React from "react";
import { Link } from "react-router-dom";

const Navbar=({navbarElements})=>{


    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse text-right" id="navbarNav">
            <h1 className="navbar-brand">Ecommercial</h1>
            <ul className="navbar-nav text ">
                {navbarElements.map((e)=><li className="nav-item active"><Link to={'/'+e} className="nav-link">{e}</Link></li>)}
            </ul>

        </div>
    </nav>);
};

export default Navbar;