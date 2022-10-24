import React, { useState } from "react";
import Carousel from "../components/Carousel";
import getFeaturesData from "../helpers/getFeaturesData"

const getFeatures = await getFeaturesData();

const Features = () => {

  const [feature, setFeature] = useState(0);

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
          <li><a onClick={() => setFeature(0)}>Simple Bookmarking</a></li>
          <li><a onClick={() => setFeature(1)}>Speedy Searching</a></li>
          <li><a onClick={() => setFeature(2)}>Easy Sharing</a></li>
        </ul>
        <Carousel featureData = {getFeatures[feature]}/>
      </div>
    </section>
  );
};

export default Features;
