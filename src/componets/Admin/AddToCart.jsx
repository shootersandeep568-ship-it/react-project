import React, { useEffect, useState } from "react";
import axios from "axios";


const AddToCart = () => {
    const [cartItems, setCartItems] = useState([
    ]);
    const increaseQty = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };
    const decreaseQty = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );
    const totalMrp = cartItems.reduce(
        (total, item) => total + item.mrp * item.qty,
        0
    );


    const [cartapi, setcartApi] = useState([]);
    console.log(cartapi);
    async function Addtocartt(e) {
        await axios.get("http://localhost:8000/cart/getCart").then((res) => {
            setcartApi(res.data.data)
        });
    }
    useEffect(() => {
        Addtocartt();
    }, []);

    const removeItem = (id) => {
        console.log(id)
        axios.post(`http://localhost:8000/cart/deleteCartItem/${id}`).then((res) => {
            console.log(res);
        });
    };

    return (
        <div className="cartPage">
            {/* LEFT */}
            <div className="cartLeft">
                <h3>My Cart ({cartapi.length})</h3>
                {cartapi.map((item) => (
                    <div className="cartItem" key={item.item.id}>
                        <img src={`data:image/;base64,${btoa(
                            String.fromCharCode(
                                ...new Uint8Array(item?.item?.image?.data?.data || "")
                            )
                        )}`} alt="" />
                        <div className="cartInfo">
                            <h4>{item.item.title}</h4>
                            <div className="price">
                                ₹{item.item.price}
                                <span>₹{item.item.mrp}</span>
                            </div>
                            <div className="qty">
                                <button onClick={() => decreaseQty(item.id)}>-</button>
                                <span>{item.qty}</span>
                                <button onClick={() => increaseQty(item.id)}>+</button>
                            </div>
                            <button className="remove" onClick={() => removeItem(item._id)}>
                                REMOVE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* RIGHT */}
            <div className="cartRight">
                <h3>PRICE DETAILS</h3>
                <div className="priceRow">
                    <span>Price ({cartItems.length} items)</span>
                    <span>₹{totalMrp}</span>
                </div>
                <div className="priceRow">
                    <span>Discount</span>
                    <span className="green">-₹{totalMrp - totalPrice}</span>
                </div>
                <div className="priceRow">
                    <span>Delivery Charges</span>
                    <span className="green">FREE</span>
                </div>
                <hr />
                <div className="priceRow total">
                    <span>Total Amount</span>
                    <span>₹{totalPrice}</span>
                </div>
                <p className="save">
                    You will save ₹{totalMrp - totalPrice} on this order
                </p>
                <button className="placeOrder">PLACE ORDER</button>
            </div>
        </div>
    );
};
export default AddToCart;
