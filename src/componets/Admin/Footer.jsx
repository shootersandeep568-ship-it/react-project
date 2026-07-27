import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaCcVisa, FaCcMastercard, FaGooglePay } from "react-icons/fa";

const Footer = () => (
  <footer className="spooky-footer">
    <div className="footerTop">
      <div className="footerColumn"><h4>ABOUT AURELIA</h4><a href="/">Our story</a><a href="/">Contact us</a><a href="/">Careers</a><a href="/">Press</a></div>
      <div className="footerColumn"><h4>SHOP</h4><a href="/">New arrivals</a><a href="/">Technology</a><a href="/">Fashion</a><a href="/">Home</a></div>
      <div className="footerColumn"><h4>HELP</h4><a href="/">Payments</a><a href="/">Delivery</a><a href="/">Returns</a><a href="/">FAQ</a></div>
      <div className="footerColumn"><h4>POLICIES</h4><a href="/">Terms of use</a><a href="/">Privacy</a><a href="/">Security</a></div>
      <div className="footerColumn address"><h4>STAY CONNECTED</h4><p>Thoughtful shopping, delivered across India.</p><div className="socialIcons"><FaFacebookF /><FaTwitter /><FaYoutube /><FaInstagram /></div></div>
    </div>
    <div className="footerBottom"><span>© 2026 Aurelia. All rights reserved.</span><div className="paymentIcons"><FaCcVisa /><FaCcMastercard /><FaGooglePay /></div></div>
  </footer>
);

export default Footer;
