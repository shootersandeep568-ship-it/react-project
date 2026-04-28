import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaGhost, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      {/* Left */}
      <div className="header__left">
        <FaGhost className="ghostIcon" />
        <h2 className="logoText">SpookyShop</h2>
      </div>

      {/* Hamburger */}
      <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Search */}
      <div className="header__search">
        <input type="text" placeholder="Search cursed items..." />
        <FaSearch className="searchIcon" />
      </div>

      {/* Right */}
      <div className={`header__right ${menuOpen ? "active" : ""}`}>
        <Link to={"/Login"}>
          <button className="spookyBtn">Login</button>
        </Link>

        <Link to={"/admin/Allproduct"}>
          <button className="spookyBtn">All Products</button>
        </Link>

        <Link to={"/Createproduct"} className="seller">
          Create Product
        </Link>

        <Link to={"/AddToCart"} className="cart">
          <FaShoppingCart /> Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;