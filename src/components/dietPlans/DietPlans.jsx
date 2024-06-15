import { motion } from "framer-motion";
import React, { useState } from "react";
import "./DietPlans.scss"; // Import your SCSS file

import salmonImage from "./1.jpg";
import chickenBreastImage from "./2.jpg";
import brownRiceImage from "./3.jpg";
import broccoliImage from "./4.jpg";

const dietPlans = [
  {
    id: 1,
    name: "Chicken Breast",
    protein: "25g",
    calories: "150 kcal",
    description: "Lean source of protein, low in fat.",
    image: chickenBreastImage,
    method: "Grill the chicken breast with spices until cooked through.",
  },
  {
    id: 2,
    name: "Brown Rice",
    protein: "5g",
    calories: "200 kcal",
    description: "Complex carbohydrate, good source of energy.",
    image: brownRiceImage,
    method: "Boil the brown rice until tender. Serve with vegetables.",
  },
  {
    id: 3,
    name: "Salmon",
    protein: "20g",
    calories: "250 kcal",
    description: "Healthy fats and omega-3 fatty acids.",
    image: salmonImage,
    method: "Bake the salmon with herbs and lemon slices until flaky.",
  },
  {
    id: 4,
    name: "Broccoli",
    protein: "3g",
    calories: "55 kcal",
    description: "High in vitamins and minerals, low in calories.",
    image: broccoliImage,
    method: "Steam the broccoli until tender, and season with salt and pepper.",
  },
];

const DietPlans = () => {
  const [flipped, setFlipped] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleFlip = (id) => {
    setFlipped(flipped === id ? null : id);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      {/* <h2 className="service-header">Diet Planning</h2> */}
      <div className="diet-plans">
        {dietPlans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${flipped === plan.id ? "flipped" : ""}`}
            onClick={() => handleFlip(plan.id)}
          >
            <div className="plan-card-inner">
              <div className="plan-card-front">
                <img src={plan.image} alt={plan.name} className="plan-image" />
                <div className="plan-info">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-details">
                    <p className="plan-item">Protein: {plan.protein}</p>
                    <p className="plan-item">Calories: {plan.calories}</p>
                    <p className="plan-description">{plan.description}</p>
                  </div>
                </div>
              </div>
              <div className="plan-card-back">
                <h3 className="plan-name">Cooking Method</h3>
                <p className="plan-method">{plan.method}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <motion.button
        className="subscribe-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleForm}
      >
        Subscribe to More Diets
      </motion.button>

      {showForm && (
        <div className="form-overlay">
          <motion.div
            className="form-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="close-button" onClick={toggleForm}>
              &#10005;
            </div>
            <form className="form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" rows="4" required />

              <div className="checkbox-container">
                <input type="checkbox" id="agree" name="agree" required />
                <label htmlFor="agree">
                  I agree to the terms and conditions
                </label>
              </div>

              <button type="submit">Submit</button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DietPlans;
