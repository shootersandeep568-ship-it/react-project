
import { Link } from 'react-router-dom'
import imges1 from '../imges/img1.webp'
import imges2 from '../imges/img2.webp'
import imges3 from '../imges/img3.webp'
import imges4 from '../imges/img4.webp'
import imges5 from '../imges/img5.webp'
import imges6 from '../imges/img6.webp'
import imges7 from '../imges/img7.webp'
import imges8 from '../imges/img8.webp'

function Sliderimg() {

    const categorydata = [
        { id: 1, categoryname: "Minutesss", categoryimg: imges1, category: "minutes" },
        { id: 2, categoryname: "Mobiles & Tablets", categoryimg: imges2, category: "mobile" },
        { id: 3, categoryname: "Fashion", categoryimg: imges3, category: "fashion" },
        { id: 4, categoryname: "Electronics", categoryimg: imges4, category: "Electronics" },
        { id: 5, categoryname: "TVs & Appliances", categoryimg: imges5, category: "TVs & Appliances" },
        { id: 6, categoryname: "Home & Furniture", categoryimg: imges6, category: "Home & Furniture" },
        { id: 7, categoryname: "Flight Bookings", categoryimg: imges7, category: "Flight Bookings" },
        { id: 8, categoryname: "Beauty, Food..", categoryimg: imges8, category: "Beauty, Food.." },
    ]

    return (
        <div className='sliderimg'>
            {categorydata.map((item) => (
                <Link className='slider2' to={`/SliderDaata/${item.category}`}>
                    <div key={item.id}>
                        <img src={item.categoryimg} alt={item.categoryname} />
                        <p>{item.categoryname}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Sliderimg
