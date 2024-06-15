import React, { useState } from "react";
import "./Prices.scss"; // Import your SCSS file

import studentImage from "./4.jpg";
import premiumImage from "./adnced.jpg";
import silverImage from "./beginr.jpg";
import goldImage from "./intmdt.jpg";

const Prices = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to backend, show success message)
    console.log("Form submitted!");
    // Close the form after submission
    setShowForm(false);
  };

  return (
    <div className="prices-container">
      <header className="prices-header">
        <h1>Pricing</h1>
        <p>We Provide Best Service for the Money You Spent</p>
      </header>

      <div className="price-cards">
        <div className="price-card">
          <img
            src={studentImage}
            alt="Student Package"
            className="package-image"
          />
          <h2 className="package-title">Student Package</h2>
          <div className="package-details">
            <ul>
              <li>
                <span className="bullet">&#8226;</span> Access to basic gym
                facilities
              </li>
              <li>
                <span className="bullet">&#8226;</span> Discounted rates for
                students
              </li>
              <li>
                <span className="bullet">&#8226;</span> Weekday access only
              </li>
            </ul>
          </div>
          <div className="package-footer">
            <div className="package-price">$29.99/month</div>
            <button className="subscribe-button" onClick={openForm}>
              Subscribe
            </button>
          </div>
        </div>

        <div className="price-card">
          <img
            src={silverImage}
            alt="Silver Package"
            className="package-image"
          />
          <h2 className="package-title">Silver Package</h2>
          <div className="package-details">
            <ul>
              <li>
                <span className="bullet">&#8226;</span> Access to all gym
                facilities
              </li>
              <li>
                <span className="bullet">&#8226;</span> Personal trainer
                sessions included
              </li>
              <li>
                <span className="bullet">&#8226;</span> Full week access
              </li>
            </ul>
          </div>
          <div className="package-footer">
            <div className="package-price">$59.99/month</div>
            <button className="subscribe-button" onClick={openForm}>
              Subscribe
            </button>
          </div>
        </div>

        <div className="price-card">
          <img src={goldImage} alt="Gold Package" className="package-image" />
          <h2 className="package-title">Gold Package</h2>
          <div className="package-details">
            <ul>
              <li>
                <span className="bullet">&#8226;</span> Access to all gym
                facilities
              </li>
              <li>
                <span className="bullet">&#8226;</span> Unlimited personal
                trainer sessions
              </li>
              <li>
                <span className="bullet">&#8226;</span> 24/7 access
              </li>
              <li>
                <span className="bullet">&#8226;</span> Access to premium
                equipment
              </li>
            </ul>
          </div>
          <div className="package-footer">
            <div className="package-price">$89.99/month</div>
            <button className="subscribe-button" onClick={openForm}>
              Subscribe
            </button>
          </div>
        </div>

        <div className="price-card">
          <img
            src={premiumImage}
            alt="Premium Package"
            className="package-image"
          />
          <h2 className="package-title">Premium Package</h2>
          <div className="package-details">
            <ul>
              <li>
                <span className="bullet">&#8226;</span> Access to all gym
                facilities & amenities
              </li>
              <li>
                <span className="bullet">&#8226;</span> Personalized fitness
                plans
              </li>
              <li>
                <span className="bullet">&#8226;</span> Unlimited access
              </li>
              <li>
                <span className="bullet">&#8226;</span> Access to all classes
                and workshops
              </li>
              <li>
                <span className="bullet">&#8226;</span> Huge discounts on
                additional services
              </li>
            </ul>
          </div>
          <div className="package-footer">
            <div className="package-price">$149.99/month</div>
            <button className="subscribe-button" onClick={openForm}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <div className="close-button" onClick={closeForm}>
              &#10005;
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h2>Join With Us</h2>
              </div>

              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />

              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prices;
