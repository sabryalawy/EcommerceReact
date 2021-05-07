import React, { useState } from "react";
import Navbar from "./componants/navbar";
import Footer from "./componants/footer";
import Product from "./componants/pages/product";
import Warehouse from "./componants/pages/warehouse";
import Profile from "./componants/pages/profile";
import Signin from "./componants/pages/signin";
import {BrowserRouter,Route,Switch  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Detales from "./componants/pages/details";
import DetailsOrder from "./componants/pages/detailsOrder";


const App=()=>{
    const [customer,setCustomer] = useState(null);
    const navbarElementsSignout =["products","warehouses","profile","logout"]; 
    const navbarElementsSignein =["products","warehouses","signin"]; 
    var navbarElements=()=>{
        if (customer===null) {
            return navbarElementsSignein;
        } else {
            return navbarElementsSignout
        }
    }

    var setCustomerOnComponent=(customCustomer)=>{
        setCustomer(customCustomer);
    }

    return(<div>
        <BrowserRouter>
            <Navbar navbarElements={
                navbarElements()
            }/>
            <Switch>
                
                <Route path='/products' component={()=><Product customer={customer}/>} />
                <Route path='/warehouses' component={Warehouse} />
                <Route path='/profile' component={()=><Profile customer={customer} />} />
                <Route path='/signin' component={()=><Signin changecustomer={setCustomerOnComponent}/>} />
                <Route path='/logout' component={()=><Signin logout={true} changecustomer={setCustomerOnComponent} />}/>
                <Route path='/details/:id/:cid' component={Detales} />
                <Route path='/detailsorder/:oid' component={ DetailsOrder } />

            </Switch>
        </BrowserRouter>
    </div>);
}

export default App;