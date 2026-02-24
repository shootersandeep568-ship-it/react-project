import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Header from './Header';

function Login() {

  const navigate = useNavigate();
  const [alldata, setalldata] = useState({});

  function getalldata(e) {
    setalldata({
      ...alldata,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/Product/Login", alldata);

      if (res.data.status) {
        toast.success("Login Successful");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Something went wrong");
      }

    } catch (error) {
      toast.error("Server Error");
    }
  }

  return (
    <>
      <Toaster />
      <Header />

      <div className='login'>
        <div className='loginCard'>
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="Emailid"
              placeholder='Enter Email'
              onChange={getalldata}
              required
            />

            <input
              type="password"
              name="password"
              placeholder='Enter Password'
              onChange={getalldata}
              required
            />

            <button type='submit'>Login</button>

            <p>
              Don't have an account?{" "}
              <Link to="/signup">Sign Up</Link>
            </p>

          </form>
        </div>
      </div>
    </>
  )
}

export default Login
