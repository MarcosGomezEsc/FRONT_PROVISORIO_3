import React, { useState } from "react";
import "../cssFooter/Slider.css";

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="contenedor_slider">
      <div className="slider">
        <button onClick={prevSlide}>Anterior</button>
        {/* <img
          className="slide-image"
          src={data[currentIndex].Imagen}
          alt={`Imagen de ${data[currentIndex].Marca} ${data[currentIndex].Modelo}`}
        /> */}
        <button onClick={nextSlide}>Siguiente</button>
      </div>
    </div>
  );
};

export default Slider;
