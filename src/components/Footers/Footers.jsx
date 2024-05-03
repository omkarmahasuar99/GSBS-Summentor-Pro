import React from "react";
import "./Footers.css";

const Footer = () => {
  return (
    <footer>
      <div className="navigation-links">
        <h4>Navigation Links</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/past-editions">Past Editions</a>
          </li>
          <li>
            <a href="/awards">Awards</a>
          </li>
          <li>
            <a href="/nomination">Nomination</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="useful-links">
        <h4>Useful Links</h4>
        <ul>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-and-conditions">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <h4>Contact for Marketing & Branding</h4>
        <p>NITIKA SHAHI</p>
        <p>080 4157 4773</p>
        <p>nitika@summentorpro.com</p>
        <h4>Contact for Sales & Exhibiting</h4>
        <p>SUHAIB AHMED</p>
        <p>+91 74065 51114</p>
        <p>suhaib@summentorpro.com</p>
      </div>
    </footer>
  );
};

export default Footer;
