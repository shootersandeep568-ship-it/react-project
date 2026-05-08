import React, { useEffect, useState } from "react";
import axios from "axios";

const AddToCart = () => {

    const [cartapi, setcartApi] = useState([]);

    // =====================================================================================

    async function Addtocartt() {
        try {
            const res = await axios.get("http://localhost:8000/cart/getCart");

            // null item remove
            const safeData = res?.data?.data?.filter(
                (item) => item && item.item
            ) || [];

            setcartApi(safeData);

        } catch (error) {
            console.log("Cart Error", error);
        }
    }

    useEffect(() => {
        Addtocartt();
    }, []);

    // =====================================================================================

    const removeItem = async (id) => {
        try {
            await axios.post(
                `http://localhost:8000/cart/deleteCartItem/${id}`
            );

            // remove without reload
            setcartApi((prev) =>
                prev.filter((item) => item?._id !== id)
            );

        } catch (error) {
            console.log(error);
        }
    };

    // =====================================================================================

    function ITEM({ item }) {

        const [quantity, setQuantity] = useState(item?.quantity || 1);

        // =====================================================================================

        async function addQuantity(id) {

            try {

                const res = await axios.post(
                    `http://localhost:8000/cart/addQuantity/${id}`
                );

                setQuantity(res?.data?.quantity || quantity + 1);

            } catch (error) {
                console.log("Add Quantity Error", error);
            }
        }

        // =====================================================================================

        async function subQuantity(id) {

            if (quantity <= 1) return;

            try {

                const res = await axios.post(
                    `http://localhost:8000/cart/subQuantity/${id}`
                );

                setQuantity(res?.data?.quantity || quantity - 1);

            } catch (error) {
                console.log("Sub Quantity Error", error);
            }
        }

        // =====================================================================================

        if (!item || !item.item) return null;

        // =====================================================================================

        const imageData = item?.item?.image?.data?.data;

        const imageSrc = imageData
            ? `data:image/png;base64,${btoa(
                  String.fromCharCode(...new Uint8Array(imageData))
              )}`
            : "https://via.placeholder.com/150";

        // =====================================================================================

        return (
            <div className="cartItem">

                <img src={imageSrc} alt="product" />

                <div className="cartInfo">

                    <h4>{item?.item?.title}</h4>

                    <div className="price">
                        ₹{item?.item?.price}
                        <span>₹{item?.item?.mrp}</span>
                    </div>

                    <div className="qty">

                        <p>Quantity :- {quantity}</p>

                        <div className="qtyButtons">

                            <button
                                onClick={() => addQuantity(item?._id)}
                            >
                                +
                            </button>

                            <span>{quantity}</span>

                            <button
                                onClick={() => subQuantity(item?._id)}
                            >
                                -
                            </button>

                        </div>
                    </div>

                    <button
                        className="remove"
                        onClick={() => removeItem(item?._id)}
                    >
                        REMOVE
                    </button>

                </div>
            </div>
        );
    }

    // =====================================================================================

    return (
        <div className="cartPage">

            {/* LEFT */}

            <div className="cartLeft">

                <h3>🛒 My Cart ({cartapi?.length})</h3>

                {
                    cartapi?.map((item) => (
                        <ITEM key={item?._id} item={item} />
                    ))
                }

            </div>

            {/* RIGHT */}

            <div className="cartRight">

                <h3>PRICE DETAILS</h3>

                <div className="priceRow">
                    <span>Price ({cartapi?.length} items)</span>
                </div>

                <div className="priceRow">
                    <span>Discount</span>
                </div>

                <div className="priceRow">
                    <span>Delivery Charges</span>
                    <span className="green">FREE</span>
                </div>

                <hr />

                <div className="priceRow total">
                    <span>Total Amount</span>
                </div>

                <button className="placeOrder">
                    PLACE ORDER
                </button>

            </div>

        </div>
    );
};

export default AddToCart;