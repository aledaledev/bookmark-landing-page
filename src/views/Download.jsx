import React from "react";
import Card from "../components/Card";

const Download = () => {
  return (
    <>
      <section className="download" id="download">
        <article>
          <h2>Download the extension</h2>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize
          </p>
        </article>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Download;
