import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function getImageSource(image) {
  const bytes = image?.data?.data;

  if (!Array.isArray(bytes) || bytes.length === 0) {
    return "";
  }

  // Converting a large image with one `...bytes` call can exceed the browser's
  // argument limit and stop the complete product list from rendering.
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
        <p className="eyebrow">THE AURELIA EDIT</p>
        <h2 className="spooky-heading">Curated for everyday luxury</h2>
      </div>

      {/* Products */}
      <div className="products">
        {api.map((item) => (
          <div className="products1" key={item._id}>

            <Link to={`/ProductDetails/${item._id}`} className="product-link">

              {/* Image */}
              <div className="img-wrapper">
                <img
                  src={getImageSource(item.image)}
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
