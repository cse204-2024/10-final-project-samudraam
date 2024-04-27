import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-sec sec-padding">
        <div className="sb-footer-links">
          <h4>For Business</h4>
          <NavLink to="/10-final-project-samudraam/motorcycles" end>
            <p>Rent Now</p>
          </NavLink>
          <a href="https://yamahamotorsports.com/">
            <p>Partnerships</p>
          </a>
          <a href="https://www.enterprise.com/en/car-rental/campaigns/rent-a-car-b.html?gclid=CjwKCAjwoa2xBhACEiwA1sb1BOGeHc5-vO-YgzJ3YM0AyqBl2cPVypETu1wQvMATgJswO8QokioPnhoCwtkQAvD_BwE&mcid=paidsearch:675&adid=673633511659&targetid=kwd-22732630&ef_id=CjwKCAjwoa2xBhACEiwA1sb1BOGeHc5-vO-YgzJ3YM0AyqBl2cPVypETu1wQvMATgJswO8QokioPnhoCwtkQAvD_BwE:G:s&s_kwcid=AL!4824!3!673633511659!e!!g!!enterprise!235023733!16804652173&campaignid=235023733&gclsrc=aw.ds&gad_source=1">
            <p>Investors</p>
          </a>
        </div>
        <div className="sb-footer-links">
          <h4>Resources</h4>
          <a href="https://youtu.be/SIfYYBcIdeo?si=AsbruAbtGjjiVjj0">
            <p>How to ride</p>
          </a>
        </div>
        <div className="sb-footer-links">
          <h4>Company</h4>
          <NavLink to="/10-final-project-samudraam/about" end>
            <p>About Us</p>
          </NavLink>
          <a href="https://you.tube/F6jWppEDoV8?si=iT2dQSMgaUXZy-XY">
            <p>Careers</p>
          </a>
          <a href="https://yout.be/cwHJimg9s5c?si=qFK2lTnZ8QIftefT">
            <p>Press</p>
          </a>
        </div>{" "}
        <div className="sb-footer-links">
          <h4>Support</h4>
          <a href="https://youtu.be/WMQqfOEsuyI?si=fJJxU_0p1zISeYZI">
            <p>Customer Support</p>
          </a>
          <a href="https://youtu.be/mBdAT36QEjo?si=dO4md0SJsM-CQIz0">
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
