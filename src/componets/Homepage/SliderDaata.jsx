import { categorydata } from "./SliderData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SliderDaata() {

  const { category } = useParams();
  const [filterCategory, setFilterCategory] = useState([]);

  useEffect(() => {
    const filterData = categorydata.filter(
      (item) => item.category === category
    );
    setFilterCategory(filterData);
  }, [category]);

  return (
    <div className="slider-container">
      {filterCategory.map((item) => (
        <div className="card" key={item.id}>
          <div className="image-wrapper">
            <img src={item?.image} alt={item.title} />
          </div>

          <div className="card-body">
            <h3 className="title">{item.title}</h3>
            <p className="desc">{item.description}</p>
            <p className="category">{item.category}</p>

            <div className="price-section">
              <span className="price">₹{item.price}</span>
            </div>
            <button className="btn">Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SliderDaata;
