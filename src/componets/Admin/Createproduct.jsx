import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Header from '../utility/Header';

function Createproduct() {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        reting: "",
        price: "",
        category: "",
        pyandmy: ""
    });

    const [productImg, setProductImg] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        setProductImg(file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const fdata = new FormData();
            Object.keys(formData).forEach(key => {
                fdata.append(key, formData[key]);
            });

            fdata.append("images", productImg);

            const res = await axios.post("http://localhost:8000/cart/Createproduct", fdata);

            if (res.data.status) {
                toast.success("✅ Product Created Successfully");
            } else {
                toast.error("❌ Something went wrong");
            }

        } catch (err) {
            toast.error("🔥 Server Error");
        }
    };

    return (
        <>
            <Toaster />
            <Header />

            <div className="container">
                <div className="card">

                    <h2>Add New Product</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="grid">

                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" name="title" onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" name="price" onChange={handleChange} required />
                            </div>

                            <div className="form-group full">
                                <label>Description</label>
                                <textarea name="description" onChange={handleChange}></textarea>
                            </div>

                            <div className="form-group">
                                <label>Rating</label>
                                <select name="reting" onChange={handleChange} required>
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <select name="category" onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="mob">Mobiles</option>
                                    <option value="tv">TV</option>
                                    <option value="furniture">Furniture</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Model / Year</label>
                                <input type="text" name="pyandmy" onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>Upload Image</label>
                                <input type="file" onChange={handleImage} />
                            </div>

                            {preview && (
                                <div className="preview">
                                    <img src={preview} alt="preview" />
                                </div>
                            )}

                        </div>

                        <button className="btn">Create Product</button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Createproduct;