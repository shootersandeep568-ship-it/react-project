import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from './Header';


// ================================ datasave =====================================================
function Login() {
  const Navigate = useNavigate();
  let [alldata, setalldata] = useState()
  console.log("alldata", alldata)
  function getalldata(e) {
    setalldata({
      ...alldata,
      [e.target.name]: e.target.value
    })
  }
  // ===============================================================================================
  // ============================= submit handal  ==================================================
  async function handleSubmit(e) {
    e.preventDefault()
    let data = await axios.post("http://localhost:8000/Product/Login", alldata).then((res) => {
      console.log(res)
      if (res.data.status) {
        toast.success("Successs");
        setTimeout(() => {
          Navigate("/")
        }, 3000);
      }
      else {
        toast.error("Smothing wrong");
      }
    })
  }
  // ====================================================================================================
  // ====================================================================================================
  return (
    <>
      <Toaster />
      <Header/>
      <div className='login'>
        <div className='login1'>
          <h2>Login</h2>
          <form className='ff1' action="" onSubmit={handleSubmit}>
            <label htmlFor=""></label>
            <input type="text" name="Emailid" id="Emailid" onChange={getalldata} placeholder='Emailid' /><br></br>
            <input type="text" name="password" id="password" onChange={getalldata} placeholder='password' /><br></br>
            <button type='submit'>Submit</button>
            <p>Don't have an account <span style={{ color: "blue" }}>sign up</span></p>
          </form>
        </div>
      </div>
    </>
  )
}
export default Login
