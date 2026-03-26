import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
// import Listings from '../Admin/Auth/Listing'
import axios from "axios";


function Product() {
    const [api, setApi] = useState([]);
    console.log(api)

    async function getProduct() {
    
        // const newproduct = new Listings()
        // const res = newproduct.product()
        // console.log(res)

        const res = await axios.get("https://react-project-backemd.vercel.app/cart/Productapi");
        setApi(res.data.AllProduct);
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div>
            <div className="Mypro">
                <h2><span style={{ color: "blue" }}>M</span>y<span style={{ color: "blue" }}>P</span>roducts..</h2>
            </div>
            <div className="products">
                {api.map((item) => (
                    <div className="products1" key={item._id}>
                        <Link to={`/ProductDetails/${item._id}`} className="product-link">
                            <div className="img-wrapper">
                                <img
                                    src={`data:image/;base64,${btoa(
                                        String.fromCharCode(
                                            ...new Uint8Array(item?.image?.data?.data || "")
                                        )
                                    )}`}
                                    alt={item.title}
                                />
                            </div>

                            <h3 className="title">{item.title}</h3>
                            <p className="desc">{item.description}</p>
                            <p className="reting1">⭐ {item.reting}</p>
                            <div className="price">
                                <span className="sellPrice">₹{item.price}</span>
                                <span className="mrp">{item.category}</span>
                                <span className="discount">{item.pyandmy}</span>
                            </div>

                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
