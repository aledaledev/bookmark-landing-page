import React from "react";

const Card = ({ props }) => {
  return (
    <div className="card">
      <img src="./src/assets/images/logo-chrome.svg" alt="Chrome" />
      <article>
        <h3>Add to Chrome</h3>
        <p>Minimum version 62</p>
        <img src='./src/assets/images/bg-dots.svg' alt="dots"/>
        <button className="button-install">Add & install Extension</button>
      </article>
    </div>
  );
};

export default Card;
