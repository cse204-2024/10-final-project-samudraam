import React from "react";
import "./Motorcyles.css";
import img1 from "./bikes/ducati-Scrambler_Icon-2021.jpg";
import img2 from "./bikes/honda-Rebel-2022.jpg";
import img3 from "./bikes/honda-africa_twin-2021 2.jpg";
import img4 from "./bikes/goldhonda.png";
import img5 from "./bikes/ktm-adventure-1290-2020.jpg";
import img6 from "./bikes/ninja-h2r-2015 2.jpg";
import img7 from "./bikes/triumph-Bonneville_T120-2016.jpg";
import img8 from "./bikes/yamaha-YZF-R1-2024 2.jpg";
import img9 from "./bikes/yamaha-xsr900-2024 2.jpg";
import { useNavigate } from "react-router-dom";

const Motorcycles = () => {
  /*PLEASE NOTE, this contains the info i will send to the api,
  thats why i needed to create data to query server:<,
  also api does not come with image, hence my struggle!
  */

  const motorcycleData = [
    {
      imageSrc: img1,
      name: "2021 Ducati Scrambler Icon",
      price: "$30.00 / day",
      make: "ducati",
      model: "scrambler icon",
      year: "2021",
    },
    {
      imageSrc: img2,
      name: "2022 Honda Rebel",
      price: "$40.00 / day",
      make: "honda",
      model: "rebel",
      year: "2022",
    },
    {
      imageSrc: img3,
      name: "2022 Honda Africa Twin ",
      price: "$50.00 / day",
      make: "honda",
      model: "africa twin",
      year: "2022",
    },
    {
      imageSrc: img4,
      name: "1983 Honda Goldwing ",
      price: "$50.00 / day",
      make: "honda",
      model: "goldwing",
      year: "1983",
    },
    {
      imageSrc: img5,
      name: "2020 KTM Adventure 1290",
      price: "$50.00 / day",
      make: "KTM",
      model: "1290 Super Adventure R",
      year: "2020",
    },
    {
      imageSrc: img6,
      name: "2015 Kawasaki Ninja H2R",
      price: "$100.00 / day",
      make: "Kawasaki",
      model: "Ninja H2R",
      year: "2015",
    },
    {
      imageSrc: img7,
      name: "2016 Triumph Bonneville",
      price: "$100.00 / day",
      make: "triumph",
      model: "Bonneville",
      year: "2016",
    },
    {
      imageSrc: img8,
      name: "2020 Yamaha YZF R1",
      price: "$100.00 / day",
      make: "Yamaha",
      model: "YZF-R1",
      year: "2020",
    },
    {
      imageSrc: img9,
      name: "2022 Yamaha XSR900",
      price: "$90.00 / day",
      make: "Yamaha",
      model: "XSR900",
      year: "2022",
    },
  ];

  //using useNavigate to send data to rentalBike
  const navigate = useNavigate();

  const handleRentClick = (motorcycle) => {
    console.log(motorcycle);
    //send it to rental bike
    navigate("/10-final-project-samudraam/rental", { state: { motorcycle } });
  };

  const MotorcycleCard = ({ motorcycle }) => (
    <div className="motorcycle-card">
      <img
        src={motorcycle.imageSrc}
        alt={motorcycle.name}
        className="motorcycle-image"
      />
      <div className="motorcycle-name">{motorcycle.name}</div>
      <div className="motorcycle-price">{motorcycle.price}</div>
      <button
        className="rent-button"
        onClick={() => handleRentClick(motorcycle)}
      >
        Rent
      </button>
    </div>
  );

  return (
    <div>
      <main className="main-motor">
        <h1 className="explore-heading">Explore our Bikes</h1>
        <div className="spacer-container">
          <div className="spacer">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="filter-bar" />
            ))}
          </div>
        </div>
        <section className="motorcycle-grid">
          {motorcycleData.map((motorcycle, index) => (
            <MotorcycleCard key={index} motorcycle={motorcycle} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Motorcycles;
