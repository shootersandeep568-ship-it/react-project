import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Product() {
  const [api, setApi] = useState([]);

  async function getProduct() {
    try {
      const res = await axios.get("http://localhost:8000/cart/Productapi");
      setApi(res.data.AllProduct);
    } catch (err) {
      console.log("Error:", err);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="spooky-wrapper">
      
      {/* Title */}
      <div className="Mypro">
        <h2 className="spooky-heading">
          🕸 My <span>Dark</span> Products 🕸
        </h2>
      </div>

      {/* Products */}
      <div className="products">
        {api.map((item) => (
          <div className="products1" key={item._id}>

            <Link to={`/ProductDetails/${item._id}`} className="product-link">

              {/* Image */}
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

              {/* Info */}
              <div className="card-content">
                <h3 className="title1">{item.title}</h3>
                <p className="desc">{item.description}</p>
                <p className="reting1">⭐ {item.reting}</p>

                <div className="price">
                  <span className="sellPrice">₹{item.price}</span>
                  <span className="mrp">{item.category}</span>
                  <span className="discount">{item.pyandmy}</span>
                </div>
              </div>

            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;