import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Product() {
    const [api, setApi] = useState([]);
    console.log(api);
    async function getProduct(e) {
        await axios.get("https://react-project-backemd.vercel.app/Cart/Productapi").then((res) => {
            setApi(res.data.AllProduct);
        });
    }
    useEffect(() => {
        getProduct();
    }, []);

    //  src={`data:image/;base64,${btoa(
    //                   String.fromCharCode(
    //                     ...new Uint8Array(products?.image?.data?.data || "")
    //                   )
    //                 )}`}

    return (

        <>

            <div className="products">
                {api.map((item) => {
                    return (
                        <>
                            <div className="products1">
                                <Link to={`/ProductDetails/${item._id}`}>
                                    <img src={`data:image/;base64,${btoa(
                                        String.fromCharCode(
                                            ...new Uint8Array(item?.image?.data?.data || "")
                                        )
                                    )}`} alt="" />
                                    <p> {item.title}</p>
                                    <p> {item.description}</p>
                                    <p> {item.reting}</p>
                                    <p className="reting1">⭐ {item.reting}</p>
                                    <div className="price">
                                        <span className="sellPrice">₹{item.price}</span>
                                        <span className="mrp">₹{item.category}</span>
                                        <span className="discount">{item.pyandmy}</span>
                                    </div>
                                </Link>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Product
