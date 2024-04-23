import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-sec sec-padding">
        <div className="sb-footer-links">
          <h4>For Business</h4>
          <a href="/services">
            <p>Our Services</p>
          </a>
          <a href="/partnerships">
            <p>Partnerships</p>
          </a>
          <a href="/investors">
            <p>Investors</p>
          </a>
        </div>
        <div className="sb-footer-links">
          <h4>Resources</h4>
          <a href="https://www.youtube.com/watch?v=WMQqfOEsuyI">
            <p>How to ride</p>
          </a>
        </div>
        <div className="sb-footer-links">
          <h4>Company</h4>
          <a href="/about">
            <p>About Us</p>
          </a>
          <a href="/careers">
            <p>Careers</p>
          </a>
          <a href="/press">
            <p>Press</p>
          </a>
        </div>{" "}
        <div className="sb-footer-links">
          <h4>Support</h4>
          <a href="/support">
            <p>Customer Support</p>
          </a>
          <a href="/faq">
            <p>FAQs</p>
          </a>
        </div>
        <div className="sb-footer-links">
          <h4>Follow Us</h4>
          <a href="https://youtu.be/dQw4w9WgXcQ?si=SVQLgHhvEhNlM87V">
            <p>Social Media</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
