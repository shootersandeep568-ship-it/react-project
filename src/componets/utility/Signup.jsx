import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Listings from "../Admin/Auth/Listing";

function Signup() {
  const navigate = useNavigate();
  const [alldata, setalldata] = useState({});

  function getalldata(e) {
    setalldata({
      ...alldata,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const mainsingup = new Listings();
      const res = await mainsingup.Singup(alldata);

      if (res.data.status) {
        toast.success("🎃 Account Created!");
        setTimeout(() => {
          navigate("/Login");
        }, 2000);
      } else {
        toast.error("💀 Something went wrong...");
      }
    } catch (error) {
      toast.error("🔥 Server Error");
    }
  }

  return (
    <>
      <Toaster />
      
      <Header />

      <div className="spooky-container">
        <div className="fog"></div>

        <div className="spooky-card">
          <h2>👻 Create Account</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="🕸 Enter Username"
              onChange={getalldata}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="📧 Enter Email"
              onChange={getalldata}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="🔒 Enter Password"
              onChange={getalldata}
              required
            />

            <button type="submit">🎃 Sign Up</button>

            <p>
              Already have an account?{" "}
              <Link to="/Login">Enter the darkness</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;