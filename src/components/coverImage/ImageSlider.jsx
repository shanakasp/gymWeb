import React, { useState } from "react";
import "./ImageSlider.scss";

// Import your local images
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";

const ImageSlider = () => {
  // Use imported images directly
  const images = [image1, image2, image3];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider">
      <div
        className="slide-wrapper"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="left-arrow" onClick={prevSlide}>
        {"<"}
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        {">"}
      </button>
      <div className="dot-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === activeIndex ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
