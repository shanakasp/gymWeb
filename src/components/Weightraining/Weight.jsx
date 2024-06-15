import { motion } from "framer-motion";
import React from "react";
import "./Weight.scss"; // Import your SCSS file

import weightliftingImage from "./1.jpg";
import bodybuildingImage from "./2.jpg";
import workoutImage from "./3.jpg";

const weightCategories = [
  {
    id: 1,
    name: "Weightlifting",
    description:
      "Build strength with compound lifts like squats and deadlifts.",
    image: weightliftingImage,
  },
  {
    id: 2,
    name: "Bodybuilding",
    description:
      "Focus on muscle hypertrophy with targeted isolation exercises.",
    image: bodybuildingImage,
  },
  {
    id: 3,
    name: "Workout",
    description: "Comprehensive routines for full-body conditioning.",
    image: workoutImage,
  },
];

const Weight = () => {
  return (
    <div className="weight-training">
      <header className="weight-header">
        <h1>Weight Training</h1>
        <p>Enhance your fitness with strength and conditioning workouts.</p>
      </header>

      <div className="weight-cards">
        {weightCategories.map((category) => (
          <motion.div
            key={category.id}
            className="weight-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="weight-image"
            />
            <div className="weight-info">
              <h3 className="weight-name">{category.name}</h3>
              <p className="weight-description">{category.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Weight;
