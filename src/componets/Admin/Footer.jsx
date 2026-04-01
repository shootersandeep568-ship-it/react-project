import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="spooky-footer">

      <div className="footerTop">

        {/* ABOUT */}
        <div className="footerColumn">
          <h4>ABOUT</h4>
          <a href="/">Contact Us</a>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Flipkart Stories</a>
          <a href="/">Press</a>
          <a href="/">Corporate Information</a>
        </div>

        {/* GROUP COMPANIES */}
        <div className="footerColumn">
          <h4>GROUP COMPANIES</h4>
          <a href="/">Myntra</a>
          <a href="/">Cleartrip</a>
          <a href="/">Shopsy</a>
        </div>

        {/* HELP */}
        <div className="footerColumn">
          <h4>HELP</h4>
          <a href="/">Payments</a>
          <a href="/">Shipping</a>
          <a href="/">Cancellation & Returns</a>
          <a href="/">FAQ</a>
        </div>

        {/* POLICY */}
        <div className="footerColumn">
          <h4>CONSUMER POLICY</h4>
          <a href="/">Cancellation & Returns</a>
          <a href="/">Terms Of Use</a>
          <a href="/">Security</a>
          <a href="/">Privacy</a>
          <a href="/">Sitemap</a>
          <a href="/">Grievance Redressal</a>
          <a href="/">EPR Compliance</a>
          <a href="/">FSSAI Food Safety Connect</a>
        </div>

        {/* ADDRESS */}
        <div className="footerColumn address">
          <h4>Mail Us:</h4>
          <p>
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
            Outer Ring Road, Bengaluru, 560103,<br />
            Karnataka, India
          </p>

          <div className="socialIcons">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        {/* OFFICE */}
        <div className="footerColumn address">
          <h4>Registered Office Address:</h4>
          <p>
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
            Outer Ring Road, Bengaluru, 560103,<br />
            Karnataka, India
          </p>
          <p>CIN : U51109KA2012PTC066107</p>
          <p>Telephone: 044-45614700</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footerBottom">
        <span>© 2007-2026 Flipkart.com</span>

        <div className="paymentIcons">
          <img src="https://img.icons8.com/color/48/visa.png" alt="visa" />
          <img src="https://img.icons8.com/color/48/mastercard.png" alt="mastercard" />
          <img src="https://img.icons8.com/color/48/rupay.png" alt="rupay" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;