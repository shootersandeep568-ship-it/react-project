import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const ProductDetails = () => {
    const { id } = useParams();
  const Navigate = useNavigate();

    let [apiData, setApiData] = useState([]);
    console.log(apiData);
    async function getData() {
        let getApiData = await axios.get("https://react-project-backemd.vercel.app/Cart/Productapi")
        let filterData = await getApiData.data.AllProduct
        const finalData = filterData.find((item) => item._id === id)
        setApiData(finalData)
    }
    useEffect(() => {
        getData();
    });

    async function AddToCart(id) {
        console.log(id)
        await axios.post(`https://react-project-backemd.vercel.app/cart/addtocart/${id}`).then((res) => {
            console.log(res);
        });
    }

    const CartPopUp = () => {
        toast.success("Item Add to Cart");
         Navigate("/AddToCart")
    };
    return (
        <>
            <Toaster />

            <div className="productDetails">
                {/* LEFT */}
                <div className="left">
                    <img
                        src={`data:image/;base64,${btoa(
                            String.fromCharCode(
                                ...new Uint8Array(apiData?.image?.data?.data || "")
                            )
                        )}`}
                        alt="images" />
                    <div className="thumbs">
                    </div>
                    <div className="actions">
                        <button className="cartBtn" onClick={() => { AddToCart(apiData._id); CartPopUp(); }}>ADD TO CART</button>
                        <button className="buyBtn">BUY NOW</button>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="right">
                    <h2>{apiData?.title}</h2>
                    <div className="rating">
                        ⭐ {apiData.reting} <span>({apiData?.description}  reting)</span>
                    </div>
                    <div className="price">
                        <span className="sellPrice">₹{apiData?.price}</span>
                        <span className="mrp">₹{apiData?.category}</span>
                        <span className="discount">{apiData?.pyandmy}</span>
                    </div>
                    <h4>Available Offers</h4>
                </div>
            </div>
        </>
    );
};
export default ProductDetails;
