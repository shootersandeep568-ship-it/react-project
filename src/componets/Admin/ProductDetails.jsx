import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function getImageSource(image) {
    const bytes = image?.data?.data;
    if (!Array.isArray(bytes) || bytes.length === 0) return "";

    let binary = "";
    const chunkSize = 0x8000;
    for (let index = 0; index < bytes.length; index += chunkSize) {
        binary += String.fromCharCode(...bytes.slice(index, index + chunkSize));
    }

    const contentType = image?.contentType?.startsWith("image/")
        ? image.contentType
        : "image/webp";
    return `data:${contentType};base64,${btoa(binary)}`;
}


const ProductDetails = () => {
    const { id } = useParams();
    let [apiData, setApiData] = useState([]);
    console.log(apiData);
    useEffect(() => {
        const getData = async () => {
            try {
                const getApiData = await axios.get(
                    "http://localhost:8000/Cart/Productapi"
                );

                const filterData = getApiData.data.AllProduct;
                const finalData = filterData.find((item) => item._id === id);

                setApiData(finalData);
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, [id]);

    async function AddToCart(id) {
        console.log(id)
        await axios.post(`http://localhost:8000/cart/addtocart/${id}`).then((res) => {
            console.log(res);
        });
    }

    const CartPopUp = () => {
        toast.success("Add to Cart");
    };
    return (
        <>
            <Toaster />

            <div className="productDetails">
                {/* LEFT */}
                <div className="left">
                    <img
                        src={getImageSource(apiData?.image)}
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
