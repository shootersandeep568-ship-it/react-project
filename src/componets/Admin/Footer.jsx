import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaSkull } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="spooky-footer">

      <div className="footerTop">

        {/* ABOUT */}
        <div className="footerColumn">
          <h4>☠ ABOUT ☠</h4>
          <a href="/">Contact Us</a>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Dark Stories</a>
          <a href="/">Press</a>
          <a href="/">Corporate Info</a>
        </div>

        {/* GROUP */}
        <div className="footerColumn">
          <h4>👁 GROUP COMPANIES</h4>
          <a href="/">Myntra</a>
          <a href="/">Cleartrip</a>
          <a href="/">Shopsy</a>
        </div>

        {/* HELP */}
        <div className="footerColumn">
          <h4>🩸 HELP</h4>
          <a href="/">Payments</a>
          <a href="/">Shipping</a>
          <a href="/">Returns</a>
          <a href="/">FAQ</a>
        </div>

        {/* POLICY */}
        <div className="footerColumn">
          <h4>📜 DARK POLICY</h4>
          <a href="/">Terms Of Use</a>
          <a href="/">Privacy</a>
          <a href="/">Security</a>
          <a href="/">Sitemap</a>
        </div>

        {/* ADDRESS */}
        <div className="footerColumn address">
          <h4>📍 Cursed Location</h4>
          <p>
            Haunted Tech Village,<br />
            Shadow Street, Dark City,<br />
            India ☠
          </p>

          <div className="socialIcons">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footerBottom">
        <span>☠ 2007 - 2026 | Haunted Store ☠</span>

        <div className="paymentIcons">
          <FaSkull className="skullIcon" />
          <FaSkull className="skullIcon" />
          <FaSkull className="skullIcon" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;