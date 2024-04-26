import "./RentalBike.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "./RentModal";

const SpecSheetItem = ({ title, items }) => (
  <>
    <div className="spec-sheet-item">
      <h3 className="spec-sheet-item-title">{title}</h3>
      <ul className="spec-sheet-item-list">
        {items.map((item, index) => (
          <li key={index}>
            <span className="spec-sheet-item-key">{item.key}</span>:{" "}
            {item.value}
          </li>
        ))}
      </ul>
    </div>
    <hr className="spec-sheet-divider" />
  </>
);

const RentalBike = () => {
  const location = useLocation();
  const [motorcycleDetails, setMotorcycleDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const motorcycle = location.state?.motorcycle;

  useEffect(() => {
    if (motorcycle) {
      fetchMotorcycleDetails(motorcycle);
    }
  }, [motorcycle]);

  //why is there like 3 api calls
  const fetchMotorcycleDetails = async (bike) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/motorcycles?make=${
          bike.make
        }&model=${encodeURIComponent(bike.model)}&year=${bike.year}`,
        {
          headers: { "X-Api-Key": "1vytly6otqIhYTudLZLjJg==c3ffjpXUbZeGSOJk" },
        }
      );
      //does this exist in the api (sanity check)
      console.log(
        `https://api.api-ninjas.com/v1/motorcycles?make=${
          bike.make
        }&model=${encodeURIComponent(bike.model)}&year=${bike.year}`
      );
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setMotorcycleDetails(data[0]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching motorcycle details:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  //make it iterable as an array (with some regex to clean input)
  const items = motorcycleDetails
    ? Object.entries(motorcycleDetails).map(([key, value]) => ({
        key: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
        value: value,
      }))
    : [];
  if (!motorcycle) {
    return <div>No motorcycle selected.</div>;
  }

  if (isLoading) {
    return <div>Loading motorcycle details...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <>
      <main className="product-details">
        <section className="product-overview">
          <div className="product-header">
            <h1 className="product-title">
              {motorcycle?.name || "Motorcycle Name"}
            </h1>
            <p className="product-price">
              {motorcycle?.price || "$0.00 / day"}
            </p>
          </div>
          <img
            src={motorcycle?.imageSrc || "https://via.placeholder.com/400"}
            alt={motorcycle?.name || "Motorcycle"}
            className="product-image"
          />
          <button className="rent-button" onClick={() => setIsModalOpen(true)}>
            Rent
          </button>
        </section>
        <div className="product-info">
          <h2 className="spec-sheet-title">Motorcycle Specifications</h2>
          <SpecSheetItem title="Specifications" items={items} />
        </div>
      </main>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        price={motorcycle?.price || "0.00"}
      />
    </>
  );
};

export default RentalBike;
