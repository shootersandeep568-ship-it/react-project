import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaGem, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      {/* Left */}
      <div className="header__left">
        <Link to="/" className="brand"><FaGem /> <span>AURELIA</span></Link>
      </div>

      {/* Hamburger */}
      <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Search */}
      <div className="header__search">
        <input type="text" placeholder="Search curated pieces" />
        <FaSearch className="searchIcon" />
      </div>

      {/* Right */}
      <div className={`header__right ${menuOpen ? "active" : ""}`}>
        <Link to={"/Login"}>
          <button className="spookyBtn">Sign in</button>
        </Link>

        <Link to={"/admin/Allproduct"}>
          <button className="spookyBtn">Collection</button>
        </Link>

        <Link to={"/Createproduct"} className="seller">Sell with us</Link>

        <Link to={"/AddToCart"} className="cart">
          <FaShoppingCart /> Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
