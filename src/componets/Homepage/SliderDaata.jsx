import { minut } from "./SliderData";
import imges9 from "../imges/s1.webp";

function SliderDaata() {
    return (
        <div className="slider-container">
            {minut.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <img src={imges9} alt="product" className="card-img" />

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
                );
            })}
        </div>
    );
}

export default SliderDaata;
