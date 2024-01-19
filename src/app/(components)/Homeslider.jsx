// HomeSlider.js
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const sliderImages = [
  "/pic1.jpeg",
  "/pic2.jpeg",
  "/pic3.JPG",
  "/pic4.jpg",
  "/pic5.JPG",
  "/pic6.HEIC",
];

const HomeSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 1 },
    reset: true,
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%", // Set the desired height here
        overflow: "hidden",
        marginTop: "auto",
        marginBottom: "auto", // Adjust this value to match your navbar height
        background: "white", // Adjust this value to match your navbar height
      }}
    >
      <animated.img
        src={sliderImages[index]}
        alt={`Slider Image ${index}`}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",

          ...props,
        }}
      />
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <BsArrowLeft size={30} color="#000" />
      </button>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <BsArrowRight size={30} color="#000" />
      </button>
    </div>
  );
};

export default HomeSlider;
