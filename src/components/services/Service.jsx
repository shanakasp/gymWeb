import { CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "./Service.scss"; // Import your separate SCSS file

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "300px", // Fixed height for the Service component
    background: "#CACACA", // Dark background color for the gym website theme
    padding: "20px",

    flexDirection: "column",
    overflow: "hidden", // Prevents overflow issues with other components
  },
  serviceCards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "calc(30% - 20px)", // Adjust card width here, minus gap
    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
    background: "#EDEDED", // Dark card background color
    color: "#FF0000", // White text color
    margin: "10px", // Adjust margin as needed
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

const services = [
  {
    title: "Bodybuilding",
    description:
      "Get stronger and build muscle mass with our specialized bodybuilding programs.",
  },
  {
    title: "Cardio",
    description:
      "Improve your cardiovascular health and endurance with our effective cardio workouts.",
  },
  {
    title: "Fitness",
    description:
      "Achieve overall fitness and wellness through personalized fitness plans tailored to your goals.",
  },
  {
    title: "Diet Planning",
    description:
      "To achieve your dream physique following good diet is essential, We help you to fix your diet.",
  },
];

const Service = () => {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className={classes.root}>
      <h2 className="service-header">Our Services</h2>
      <div className={classes.serviceCards}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`card ${classes.card}`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
            }}
            whileTap={{ scale: 1.1 }}
            onClick={openForm} // Open form on card click
          >
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                sx={{ marginTop: "35px", fontWeight: "bold" }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ marginTop: "25px", fontSize: "15px" }}
              >
                {service.description}
              </Typography>
              <div className="hover-text">Click to Join</div>
            </CardContent>
          </motion.div>
        ))}
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <div className="close-button" onClick={closeForm}>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
