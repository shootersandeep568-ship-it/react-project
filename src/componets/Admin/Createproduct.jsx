import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Header from '../utility/Header';

function Createproduct() {
    let [Createproductdata, setCreateproduct] = useState()
    console.log(Createproductdata)
    const [productImg, setProductImg] = useState();
    console.log(productImg);
    function getCreateproductdata(e) {
        setCreateproduct({
            ...Createproductdata,
            [e.target.name]: e.target.value
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        console.log(Createproductdata.title);
        const fdata = new FormData();
        fdata.append("title", Createproductdata.title);
        fdata.append("description", Createproductdata.description);
        fdata.append("images", productImg);
        fdata.append("reting",Createproductdata.reting)
        fdata.append("price",Createproductdata.price)
        fdata.append("category",Createproductdata.category)
        fdata.append("pyandmy",Createproductdata.pyandmy)


        let data = await axios.post("http://localhost:8000/cart/Createproduct", fdata).then((res) => {
            if (res.data.status) {
                toast.success("Successs product");
                setTimeout(() => {
                }, 3000);
            }
            else {
                toast.error("Smothing wrong");
            }
        })
    }
    return (
        <>
            <Toaster />
            <Header/>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <div className='createform'>
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ color: "white" }}>Add Product</h2>
                    </div>
                    <form action="" onSubmit={handleSubmit} enctype="multipart/form-data">
                        <div className='createform1'>
                            <label htmlFor="">title</label>
                            <input type="text" name="title" id="" onChange={getCreateproductdata} required/>
                        </div>
                        <div className='createform1'>
                            <label htmlFor="">description</label>
                            <input type="text" name="description" id="" onChange={getCreateproductdata} />
                        </div>
                        <div className='createform1'>
                            <label htmlFor="">reting</label>
                            <select name="reting" id="" onChange={getCreateproductdata} required>
                                <option value="none">Select a option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className='createform1'>
                            <label htmlFor="">price</label>
                            <input type="text" name="price" id="" onChange={getCreateproductdata} required/>
                        </div>
                        <div className='createform1'>
                            <label htmlFor="">category</label>
                            <select name="category" id="" onChange={getCreateproductdata }>
                                <option value="Selectctgy">Select Category</option>
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
                            <label htmlFor="">Imges</label>
                            <input className='imgfile' type="file" name="imges" id="" onChange={(e) => setProductImg(e.target.files[0])} />
                        </div>
                        <div className='createform1'>
                            <label htmlFor="">Model Year/Production Year</label>
                            <input type="text" name="pyandmy" id="" onChange={getCreateproductdata} required />
                        </div>
                        <div className='formbtn'>
                            <button>Sumbet</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Createproduct
