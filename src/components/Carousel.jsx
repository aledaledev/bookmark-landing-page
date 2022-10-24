import React from "react";

const Carousel = ({featureData}) => {
  const {title , description, url} = featureData;
  return (
    <div className="carousel">
      <span>
        <img src={url} />
      </span>
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="info-button">more info</button>
      </article>
    </div>
  );
};

export default Carousel;
