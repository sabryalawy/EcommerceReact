import React, { useEffect, useState } from "react";

const DetailsOrder = ({ match }) => {

        const [order, setOrder] = useState();
        const [theproduct, setTheProduct] = useState();
        const [thewarehouse, setThewarehouse] = useState();

        const getProduct = async (ee) => {
                try { 
                await fetch('https://rcir625wwg.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_Product?id=' + ee.pid).then((rez1) => rez1.json()).then((rezz1) => setTheProduct(rezz1))
        }catch (err) {

        }
}
const getWarehouse = async (ee) => {
        try {
                await fetch('https://2wgubgo8s2.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_Warehouse?id=' + ee.wid).then((rez1) => rez1.json()).then((rezz1) => setThewarehouse(rezz1))
        } catch (err) {

        }
}

useEffect(() => {

        fetch('https://wfy59p2k56.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_Order?id=' + match.params.oid).
                then((rez) => rez.json()).
                then(rezz => {
                        setOrder(rezz[0]);
                        getProduct(rezz[0]);
                        getWarehouse(rezz[0]);
                }
                )
}, []);




if (order === undefined || thewarehouse === undefined || theproduct === undefined)
        return <h1>please waite</h1>

return (
        <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 ">
                {console.log( order)}
                {console.log( thewarehouse)}
                {console.log(theproduct)}

                <div className="card-body">
                        <h5 className="card-title">Order ID: {order.ID}</h5>
                        <p className="card-text">Date: {order.date} </p>
                        <p className="card-text">Warehouse ID: {thewarehouse[0].ID}</p>
                        <p className="card-text">Warehouse City: {thewarehouse[0].city}</p>
                        <p className="card-text">Product Name: {theproduct[0].name}</p>
                        <p className="card-text">Product Brand: {theproduct[0].brand}</p>
                </div>
        </div>
);

}

export default DetailsOrder;