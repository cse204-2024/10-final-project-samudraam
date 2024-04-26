import React from "react";
import "./RentModal.css";

const RentModal = ({ isOpen, onClose, price, children }) => {
  const [fullName, setFullName] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Request sent, our team will contact you shortly.");
    handleClose();
  };

  const calculateTotal = () => {
    //price is a string, use regex to convert
    const priceNum = price.match(/[+-]?(\d+\.\d+|\d+)/g);
    const days = (new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24);
    return days > 0 ? (days * parseFloat(priceNum)).toFixed(2) : "0.00";
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form className="rent-form" onSubmit={handleSubmit}>
          <header className="form-header">
            <h2 className="form-title">Rent</h2>
            <button
              type="button"
              className="close-button"
              onClick={handleClose}
            >
              X
            </button>
          </header>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              className="form-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate" className="form-label">
              Rent Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              className="form-input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate" className="form-label">
              Rent End Date:
            </label>
            <input
              type="date"
              id="endDate"
              className="form-input"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <footer className="form-footer">
            <div className="total-price">
              <span className="total-label">Total:</span>
              <span className="price">${calculateTotal()}</span>
            </div>
            <button type="submit" className="rent-button2">
              Rent
            </button>
          </footer>
        </form>
        {children}
      </div>
    </div>
  );
};

export default RentModal;
