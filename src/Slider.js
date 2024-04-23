import "./Slider.css";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import logo from "./logo.png";

const Slider = ({ imageUrls }) => {
  const [imageIndex, setIndex] = useState(0);

  function showNext() {
    setIndex((index) => {
      if (index == imageUrls.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }

  function showPrev() {
    setIndex((index) => {
      if (index == 0) {
        return imageUrls.length - 1;
      }
      return index - 1;
    });
  }

  return (
    <div className="slider-container">
      <div className="slider-header">
        <img src={logo} alt="Logo" className="slider-logo" />
        <h1 className="slider-h1">RevRide</h1>
        <p className="slider-p">Rev Ride Rumble</p>
      </div>
      <div className="slider">
        <div className="slider-overlay"></div>
        <img src={imageUrls[imageIndex]} className="img-slider-img" />
        <button onClick={showPrev} className="slider-btn left">
          <ArrowBigLeft />
        </button>
        <button onClick={showNext} className="slider-btn right">
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
