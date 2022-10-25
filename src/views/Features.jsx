import React, { useEffect, useState } from "react";
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
          <li><a onClick={() => setFeature(0)}>Simple Bookmarking<span className={`deco ${feature===0?"bg-soft-red":""}`}></span></a></li>
          <li><a onClick={() => setFeature(1)}>Speedy Searching<span className={`deco ${feature===1?"bg-soft-red":""}`}></span></a></li>
          <li><a onClick={() => setFeature(2)}>Easy Sharing<span className={`deco ${feature===2?"bg-soft-red":""}`}></span></a></li>
        </ul>
        <Carousel featureData = {getFeatures[feature]}/>
      </div>
    </section>
  );
};

export default Features;
