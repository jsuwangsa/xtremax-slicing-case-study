import "./Description.css";
import React from "react";
import BluePin from "../../assets/BluePin.png";
import BrowseGreen from "../../assets/BrowseGreen.png";

function Description({ data }) {
  console.log(data, "description");
  return (
    <div className="description">
      <img className="description-img" src={data.image} alt={data.name} />
      <h5 className="description-title">{data.name}</h5>
      <p className="description-intro">{data.intro}</p>
      <p className="description-info">{data.description}</p>
      <p className="description-address">
        <img src={BluePin} alt="Blue Pin" />
        {data.address}
      </p>
      <a
        className="description-website"
        href={`${data.website}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={BrowseGreen} alt="BrowseGreen" />
        {data.website}
      </a>
    </div>
  );
}

export default Description;
