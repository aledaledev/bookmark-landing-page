import React from "react";
import Carousel from "../components/Carousel";

const Features = () => {
  return (
    <section className="features" id="features">
      <article>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your booksmarks sync between your devices so you can access
          then on the go.
        </p>
      </article>

      <div className="carousel-container">
        <ul className="options">
          <li><a href="">Simple Bookmarking</a></li>
          <li><a href="">Speedy Searching</a></li>
          <li><a href="">Easy Sharing</a></li>
        </ul>
        <Carousel />
      </div>
    </section>
  );
};

export default Features;
