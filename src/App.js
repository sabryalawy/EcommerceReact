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
import Signup from './componants/pages/signup';
import WarehouseDetails from "./componants/pages/warehousedetails";
import AddProduct from "./componants/pages/addEntities/addproduct";
import AddWarehouse from "./componants/pages/addEntities/addwarehouse";
import AddProductToWarehouse from "./componants/pages/addEntities/addproducttowarehouse";


const App=()=>{
    const [isAdmin,setIsAdmin]=useState(false);
    const [customer,setCustomer] = useState(null);
    const navbarElementsSignout =["Products","Warehouses","Profile","LogOut"]; 
    const navbarElementsSignein =["Products","Warehouses","SignIn"]; 
    var navbarElements=()=>{
        if (customer===null) {
            return navbarElementsSignein;
        } else {
            return navbarElementsSignout
        }
    }

    const getIsAdmin=()=>{
        return isAdmin;
    }

    const setIsAdminf=(admin)=>{
        if(admin){
            setIsAdmin(admin);
        }
    }
    var setCustomerOnComponent=(customCustomer)=>{
        setCustomer(customCustomer);
    }

    return(<div>
        <BrowserRouter>
            <Navbar navbarElements={
                navbarElements()
            }  isAdmin={getIsAdmin} setisAdmin={setIsAdminf} changecustomer={setCustomerOnComponent} customer={customer}/>
            <Switch>
                
                <Route path='/products' component={()=><Product customer={customer}/>} />
                <Route path='/warehouses' component={()=><Warehouse cid={()=>{return customer==null? undefined:customer.id}}/>} />
                <Route path='/profile' component={()=><Profile customer={customer} />} />
                <Route path='/signin' component={()=><Signin changecustomer={setCustomerOnComponent} isAdmin={setIsAdminf}/>} />
                <Route path='/logout' component={()=><Signin logout={true} changecustomer={setCustomerOnComponent} isAdmin={setIsAdminf}/>}/>
                <Route path='/details/:id/:cid' component={Detales} />
                <Route path='/detailsorder/:oid' component={ DetailsOrder } />
                <Route path='/signup' component={ Signup } />
                <Route path='/warehousedetails/:wid' component={ WarehouseDetails } />
                <Route path='/AddProduct' component={ AddProduct } />
                <Route path='/AddWarehouse' component={ AddWarehouse } />
                <Route path='/AddProductToWarehouse' component={ AddProductToWarehouse } />

            </Switch>
        </BrowserRouter>
    </div>);
}

export default App;