import React, { useEffect, useState } from "react";
import axios from "axios";


const AddToCart = () => {
   
    // =================================================================================================================
    const [cartapi, setcartApi] = useState([]);
    console.log(cartapi);
    async function Addtocartt(e) {
        await axios.get("https://react-project-backemd.vercel.app/cart/getCart").then((res) => {
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
    // ==========================================================================================================

    function ITEM({ item }) {
        console.log("item in ITEM", item)
        const [quantity, setQuantity] = useState(item?.quantity);
        async function addQuantity(id) {
            setQuantity(quantity + 1);
            try {
                const res = await axios.post(`http://localhost:8000/cart/addQuantity/${id}`,);
                setQuantity(res.data.quantity);
                window.location.reload();
            } catch (error) {
                console.log("error in AddQauntity", error);
                setQuantity(quantity - 1);
            }
        }

        async function subQuantity(id) {
            setQuantity(quantity - 1);
            try {
                const res = await axios.post(`http://localhost:8000/cart/subQuantity/${id}`,);
                setQuantity(res.data.quantity);
                window.location.reload();
            } catch (error) {
                console.log("error in AddQauntity", error);
                setQuantity(quantity - 1);
            }
        }
        // ==========================================================================================================

     

        return (
            <>
                <div className="cartItem" key={item.item._id}>
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
                            <p>Quantity :- {item?.quantity}</p>
                            <button onClick={() => addQuantity(item._id)}>+</button>
                            <span>{item.qty}</span>
                            <button onClick={() => subQuantity(item._id)}>-</button>
                        </div>
                        <button className="remove" onClick={() => removeItem(item._id)}>
                            REMOVE
                        </button>
                    </div>
                </div>
            </>
        )
        // =================================================================================================================
    }




    return (
        <div className="cartPage">
            {/* LEFT */}
            <div className="cartLeft">
                <h3>My Cart ({cartapi.length})</h3>
                {cartapi.map((item) => (
                    <ITEM item={item} />
                ))}
            </div>
            {/* RIGHT */}
            <div className="cartRight">
                <h3>PRICE DETAILS</h3>
                <div className="priceRow">
                    <span>Price ({cartapi.length} items)</span>
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
                <p className="save">
                </p>
                <button className="placeOrder">PLACE ORDER</button>
            </div>
        </div>
    );
};
export default AddToCart;
