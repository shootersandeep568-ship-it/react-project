import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import Listings from "../Admin/Auth/Listing";

function Login() {
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
      const main = new Listings();
      const res = await main.login(alldata);

      if (res.data.status === false) {
        toast.error("💀 " + res.data.message);
      } else if (res.data.status === true) {
        toast.success(`👻 Welcome ${res.data.user.name}`);
        localStorage.setItem("token", res.data.token);

        setTimeout(() => {
          navigate("/");
        }, 1200);
      } else {
        toast.error("🔥 Something went wrong...");
      }
    } catch (err) {
      console.log(err);
      toast.error("🧟 Server Error");
    }
  }

  return (
    <>
      <Toaster />
      <Header />

      <div className="spooky-login-container">
        <div className="fog"></div>

        <div className="spooky-login-card">
          <h2>🔮 Enter If You Dare</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="Emailid"
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
            <button type="submit">👁 Login</button>
            <p>
              New soul?{" "}
              <Link to="/Singup">Create Account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;