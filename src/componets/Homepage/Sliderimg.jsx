
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
        { id: 1, categoryname: "Minutes", categoryimg: imges1 },
        { id: 2, categoryname: "Mobiles & Tablets", categoryimg: imges2 },
        { id: 3, categoryname: "Fashion", categoryimg: imges3 },
        { id: 4, categoryname: "Electronics", categoryimg: imges4 },
        { id: 5, categoryname: "TVs & Appliances", categoryimg: imges5 },
        { id: 6, categoryname: "Home & Furniture", categoryimg: imges6 },
        { id: 7, categoryname: "Flight Bookings", categoryimg: imges7 },
        { id: 8, categoryname: "Beauty, Food..", categoryimg: imges8 },
    ]

    return (
        <div className='sliderimg'>
            {categorydata.map((item) => (
                <div className='slider2' key={item.id}>
                    <img src={item.categoryimg} alt={item.categoryname} />
                    <p>{item.categoryname}</p>
                </div>
            ))}
        </div>
    )
}

export default Sliderimg
