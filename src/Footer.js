import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-sec sec-padding">
                {/* For Business Section */}
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
                
                {/* Resources Section */}
                <div className="sb-footer-links">
                    <h4>Resources</h4>
                    <a href="/blog">
                        <p>Blog</p>
                    </a>
                    <a href="/case-studies">
                        <p>Case Studies</p>
                    </a>
                    <a href="/whitepapers">
                        <p>Whitepapers</p>
                    </a>
                </div>

                {/* Company Information Section */}
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
                </div>

                {/* Support Section */}
                <div className="sb-footer-links">
                    <h4>Support</h4>
                    <a href="/support">
                        <p>Customer Support</p>
                    </a>
                    <a href="/faq">
                        <p>FAQs</p>
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="sb-footer-links">
                    <h4>Follow Us</h4>
                    <a href="/social-media">
                        <p>Social Media</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
