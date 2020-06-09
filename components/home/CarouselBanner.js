import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>

      </Carousel>
    </div>
  );
};

export default CarouselHome;
