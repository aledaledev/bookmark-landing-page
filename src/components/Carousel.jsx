import React from "react";

const Carousel = ({ props }) => {
  return (
    <div className="carousel">
      <span>
        <img src="./src/assets/images/illustration-features-tab-1.svg" />
      </span>
      <article>
        <h2>Bookmark in one click</h2>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <button className="info-button">more info</button>
      </article>
    </div>
  );
};

export default Carousel;
