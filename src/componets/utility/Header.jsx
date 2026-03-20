import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            {/* Left */}
            <div className="header__left">
                <img
                    src=""
                    alt="Flipkart"
                    className="logo"
                />
                <span className="explore">
                    Explore <span>Plus</span>
                </span>
            </div>

            {/* Search */}
            <div className="header__search">
                <input
                    type="text"
                    placeholder="Search for products, brands and more"
                />
                <FaSearch className="searchIcon" />
            </div>

            {/* Right */}
            <div className="header__right">
                <button className="loginBtn"> <Link to={"/Login"}>Login</Link></button>
                <button className="loginBtn"> <Link to={"/admin/Allproduct"}>Allproducts</Link></button>
                <span className="seller"> <Link to={"/Createproduct"}>Create Product</Link></span>
                <span className="cart" ><FaShoppingCart /> <Link style={{ color: "white" }} to={"/AddToCart"}>Cart</Link></span>
            </div>

        </div>

    );
};

export default Header;

