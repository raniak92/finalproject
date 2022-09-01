import React from "react";
import Carousel from "react-bootstrap/Carousel";
function Slide() {
  return (
    <div>
      <Carousel
        style={{
          height: "50vh",
          height: "50vh",
          backgroundColor: "white",
          marginTop: "90px",
          marginButtom: "70px",
        }}
      >
        <Carousel.Item interval={1000}>
          <img
            style={{ height: "300px" }}
            className="d-block w-100"
            src="./images/img14.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            style={{ height: "300px" }}
            className="d-block w-100"
            src="./images/img12.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block w-100"
            src="./images/img13.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;
