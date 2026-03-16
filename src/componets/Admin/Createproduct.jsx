import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Header from '../utility/Header';

function Createproduct() {
    const [Createproductdata, setCreateproduct] = useState({});
    const [productImg, setProductImg] = useState();
    function getCreateproductdata(e) {
        setCreateproduct({
            ...Createproductdata,
            [e.target.name]: e.target.value
        })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const fdata = new FormData();
        fdata.append("title", Createproductdata.title);
        fdata.append("description", Createproductdata.description);
        fdata.append("images", productImg);
        fdata.append("reting", Createproductdata.reting);
        fdata.append("price", Createproductdata.price);
        fdata.append("category", Createproductdata.category);
        fdata.append("pyandmy", Createproductdata.pyandmy);
        await axios.post("https://react-project-backemd.vercel.app/cart/Createproduct", fdata)
            .then((res) => {
                if (res.data.status) {
                    toast.success("Success Product");
                } else {
                    toast.error("Something wrong");
                }
            })
    }

    return (
        <>
            <Toaster />
            <Header />
            <div className="create-container">
                <div className='createform'>
                    <h2>Add Product</h2>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className='createform1'>
                            <label>Title</label>
                            <input type="text" name="title" onChange={getCreateproductdata} required />
                        </div>
                        <div className='createform1'>
                            <label>Description</label>
                            <input type="text" name="description" onChange={getCreateproductdata} />
                        </div>
                        <div className='createform1'>
                            <label>Rating</label>
                            <select name="reting" onChange={getCreateproductdata} required>
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
                            <input type="number" name="price" onChange={getCreateproductdata} required />
                        </div>

                        <div className='createform1'>
                            <label>Category</label>
                            <select name="category" onChange={getCreateproductdata}>
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
                            <input type="file" onChange={(e) => setProductImg(e.target.files[0])} />
                        </div>

                        <div className='createform1'>
                            <label>Model / Production Year</label>
                            <input type="text" name="pyandmy" onChange={getCreateproductdata} required />
                        </div>

                        <div className='formbtn'>
                            <button type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Createproduct;
