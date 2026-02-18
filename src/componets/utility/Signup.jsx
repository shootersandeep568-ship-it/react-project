import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from './Header';



// ================================ datasave ============================================================
function Signup() {
  const Navigate = useNavigate();
  let [alldata, setalldata] = useState()
  console.log("alldata", alldata)
  function getalldata(e) {
    setalldata({
      ...alldata,
      [e.target.name]: e.target.value
    })
  }
  // ============================= submit handal=============================================================
  async function handleSubmit(e) {
    e.preventDefault()
    await axios.post("http://localhost:8000/Product/signup", alldata).then((res) => {
      if (res.data.status) {
        toast.success("Successs");
        setTimeout(() => {
          Navigate("/Login")
        }, 3000);
      }
      else {
        toast.error("Smothing wrong");
      }
    })
  }
  // =============================================================================================
  // ==============================================================================================
  return (
    <>
      <Toaster />
      <Header />
      <div className='signup'>
        <div className='signup1'>
          <h2>Sign Up</h2>
          <form className='ff' action="" onSubmit={handleSubmit}>
            <label htmlFor=""> Username</label><br></br>
            <input type="text" name='username' id='' onChange={getalldata} /><br></br>
            <label htmlFor="">Email</label><br></br>
            <input type="text" name="email" id="" onChange={getalldata} /><br></br>
            <label htmlFor="">Password</label><br></br>
            <input type="text" name="password" id="" onChange={getalldata} /><br></br>
            <button type='submit'>Submit</button>
            <p>Already have an account? <span style={{ color: "red" }}></span><Link style={{ color: "blue" }} to={"/Login"}>login</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}
export default Signup
