import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ax from "axios";
import Profile from "./profile";
import Product from "./product"

const Details = ({ match }) => {
    const [product, setProduct] = useState(null);
    const [order, setOrder] = useState(null);
    var warehouse;


    const getWarehouse = async () => {
        await fetch("https://4mykky7yef.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_WarehouseProduct?pid=" + match.params.id)
            .then((rez) => rez.json())
            .then((rezz) => {
                console.log(rezz);
                warehouse = rezz;
            })
    }

    useEffect(() => {
        getWarehouse().then(() => {
            fetch('https://rcir625wwg.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_Product?id=' + match.params.id).then(rez => rez.json()).then(rezz => setProduct(rezz)).then(() => setOrder({
                "TableName": "BZU13_ecommerce",
                "Item":
                {
                    wid: warehouse[0].wid,
                    cid: match.params.cid,
                    pid: match.params.id,
                    date: new Date().toString(),
                    type: "order"
                }
            }));
        });
    }, []);

    const handleMakeOrder = () => {
        console.log(order);
        ax.post("https://wfy59p2k56.execute-api.eu-central-1.amazonaws.com/ecommerce/BZU13_Order", JSON.stringify(order)).then(() => alert('Thank you for buying!'))
    }

    if (product === null)
        return <h1>pleasewaite</h1>;
    return (

        <div className="shadow-lg p-5 mb-5 bg-white rounded m-5 ">
            <div className="card-body">
                <h5 className="card-title">{product[0].brand}</h5>
                <p className="card-text">{product[0].name}</p>
                <p className="card-text">{product[0].ID}</p>
                <p className="card-text">Serial: {product[0].serial}</p>
                <p className="card-text d-inline-flex mr-2">{product[0].price} $ </p>
                <button className="btn btn-primary " onClick={() => handleMakeOrder()} >Order</button>
            </div>
        </div>
    );
}

export default Details;