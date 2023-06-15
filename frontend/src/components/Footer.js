import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-mm">
        <div className="footer-link">
          <div className="footer-link-div">
            <h4>Footer</h4>
            <Link to="/home">
              <p>Home</p>
            </Link>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/register">
              <p>Register</p>
            </Link>
          </div>

          <div className="footer-link-div">
            <h4>Company</h4>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/home">
              <p>Career</p>
            </Link>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </div>

          <div className="footer-link-div">
            <h4>Social Media</h4>
            <div className="social-media">
              <Link>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-square-twitter"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-square-instagram"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-below">
          <div className="copyright">
            <p>@ {new Date().getFullYear()} copyright</p>
          </div>
          <div className="below-links">
            <Link to="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </Link>
            <Link to="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </Link>
            <Link to="/security">
              <div>
                <p>Security</p>
              </div>
            </Link>
            <Link to="/cookie">
              <div>
                <p>Cookie</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
