import React from "react";

const Card = ({ downloadData }) => {
  const {navegator,version, url} = downloadData
  return (
    <div className="card">
      <img src={url} alt={navegator} />
      <article>
        <h3>Add to {navegator}</h3>
        <p>Minimum version {version}</p>
        <img src='./images/bg-dots.svg' alt="dots"/>
        <button className="button-install">Add & install Extension</button>
      </article>
    </div>
  );
};

export default Card;
