import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerCol">
          <h4>ABOUT</h4>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
        </div>

        <div className="footerCol">
          <h4>HELP</h4>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>

        <div className="footerCol">
          <h4>POLICY</h4>
          <p>Return Policy</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
        </div>

        <div className="footerCol">
          <h4>SOCIAL</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>

        <div className="footerCol address">
          <h4>Mail Us:</h4>
          <p>
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Bengaluru, 560103
          </p>
        </div>

        <div className="footerCol address">
          <h4>Registered Office Address:</h4>
          <p>
            Flipkart Internet Private Limited,<br />
            Bengaluru, Karnataka, India<br />
            CIN : U51109KA2012PTC066107
          </p>
        </div>
      </div>

      <div className="footerBottom">
        <span>© 2026 Flipkart Clone</span>
        <span>Made with ❤️ using React</span>
      </div>
    </footer>
  );
};

export default Footer;
