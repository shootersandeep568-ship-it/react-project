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
    const data = await axios
      .post("http://localhost:8000/Product/Login", alldata)
      .then((res) => {
        console.log(res)
        if (res.data.status === false) {
          toast.error(res.data.message);
        } else if (res.data.status === true) {
          toast.success(`Welcome ${res.data.user.name}`);
          localStorage.setItem("token", res.data.token);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error("Something went wrong!....");
        }
      })
      .catch((err) => {
        console.log("error in fetching data for login", err);
      });
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
              <Link to="/Singup">Sign Up</Link>
            </p>

          </form>
        </div>
      </div>
    </>
  )
}
export default Login
