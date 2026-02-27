import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AllProducts() {

    const [api, setApi] = useState([]);
    console.log(api);

    async function handleSubmit(e) {
        let data = await axios
            .get("http://localhost:8000/cart/Productapi")
            .then((res) => {
                setApi(res.data.AllProduct);
                console.log(res)
            });
    }

    useEffect(() => {
        handleSubmit()
    }, [])

    const [update, setUpdate] = useState(null)
    const UpdateProduct = ({ item, index }) => {
        const [title, setTitle] = useState(item.title)
        console.log(title)
        const [description, setDescription] = useState(item.description)
        const [price, setPrice] = useState(item.price)
        const [reting, setreting] = useState(item.reting)
        const [category, setcategory] = useState(item.category)
        const [pyandmy, setpyandmy] = useState(item.pyandmy)


        const updateData = (id) => {
            const res = axios.post(`http://localhost:8000/cart/updateData/${id}`,
                { title, description, price, reting, category, pyandmy })
            console.log(res)

        }

        return (
            <>
                <button onClick={() => setUpdate(index)}>Update</button>
                {update == index ? (<>

                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className='createform1'>
                            <label>Title</label>
                            <input type="text" name="title" defaultValue={item.title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='createform1'>
                            <label>Description</label>
                            <input type="text" name="description" defaultValue={item.Description}
                                onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className='createform1'>
                            <label>Rating</label>
                            <select name="reting" defaultValue={item.reting}
                                onChange={(e) => setreting(e.target.value)} >
                                <option value="">Select rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div className='createform1'>
                            <label>Price</label>
                            <input type="number" name="price" defaultValue={item.price}
                                onChange={(e) => setPrice(e.target.value)} />
                        </div>

                        <div className='createform1'>
                            <label>Category</label>
                            <select name="category" defaultValue={item.category}
                                onChange={(e) => setcategory(e.target.value)} >
                                <option value="">Select Category</option>
                                <option value="minutes">Minutes</option>
                                <option value="mob">Mobiles & Tablets</option>
                                <option value="fashion">Fashion</option>
                                <option value="tv">TVs & Appliances</option>
                                <option value="furniture">Home & Furniture</option>
                                <option value="flight">Flight Bookings</option>
                                <option value="beauty">Beauty, Food..</option>
                            </select>
                        </div>

                        <div className='createform1'>
                            <label>Images</label>
                            <input type="file" />
                        </div>

                        <div className='createform1'>
                            <label>Model / Production Year</label>
                            <input type="text" name="pyandmy" defaultValue={item.pyandmy}
                                onChange={(e) => setpyandmy(e.target.value)} />
                        </div>

                        <div className='formbtn'>
                            <button type="submit" onClick={() =>updateData(item._id)}>Submit</button>
                        </div>

                    </form>

                </>) : ""}

            </>
        )

    }

    return (
        <>
            <h1>Admin Dashboard</h1>

            <table>
                <tr>
                    <th>S.NO</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Button</th>
                </tr>
                {api && api.map((item, index) => {
                    return (
                        <>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button>Delete</button>
                                    <UpdateProduct item={item} index={index} />
                                </td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    )
}

export default AllProducts