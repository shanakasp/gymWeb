import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import "./AboutUs.scss";
const AboutUs = () => {
  const controls = useAnimation();
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const shouldShowButton = window.scrollY > window.innerHeight * 0.5;
      setShowButton(shouldShowButton);

      const element = document.querySelector(".about-us-container");
      const distanceToTop = element.getBoundingClientRect().top;
      const isVisible = distanceToTop < window.innerHeight * 0.75;

      if (isVisible) {
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="about-us-container">
      <motion.div
        className="about-us-content"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <motion.h1>Welcome to About-Us</motion.h1>
        <motion.p variants={staggerChildren}>
          We are dedicated to providing exceptional fitness solutions that cater
          to individuals looking to achieve their health goals. Our team of
          experienced trainers and coaches is committed to your success,
          offering personalized plans and guidance every step of the way.
        </motion.p>
        <motion.p variants={staggerChildren}>
          With over a decade of experience in the fitness industry, we have
          helped thousands of clients transform their lives through proper
          training, nutrition, and lifestyle changes. Our facilities are
          equipped with state-of-the-art equipment, ensuring you have everything
          you need to reach peak performance.
        </motion.p>
        <motion.p variants={staggerChildren}>
          Whether you are a beginner or a seasoned athlete, our programs are
          designed to meet your unique needs and aspirations. Join us today and
          embark on a journey to a healthier, fitter you.
        </motion.p>
        <motion.p variants={staggerChildren}>
          Contact us to schedule a consultation or visit our gym to experience
          firsthand what sets us apart. Your fitness journey starts here.
        </motion.p>
      </motion.div>
      {showButton && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUpCircle className="arrow-icon" />
          Click to Go Top
        </motion.button>
      )}
    </div>
  );
};

export default AboutUs;
