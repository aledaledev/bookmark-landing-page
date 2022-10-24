import React from "react";
import Card from "../components/Card";
import getDownloadData from "../helpers/getDownloadData"

const getDownloads = await getDownloadData();

const Download = () => {

  return (
    <>
      <section className="download" id="pricing">
        <article>
          <h2>Download the extension</h2>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize
          </p>
        </article>
        <div className="card-container">
          {getDownloads.map(downloadData => <Card key={downloadData.id} downloadData={downloadData}/>)}
        </div>
      </section>
    </>
  );
};

export default Download;
