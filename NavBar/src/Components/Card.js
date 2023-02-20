import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, title, text, url }) {
  return (
    <div className="card card h-200 card w-200 text-center bg-light bg-gradient animate__animated animate__fadeInUp align-items-center">
      <div className="object-fit-fill overflow">
        <img src={imageSource}  className="card-img-top object-fit-cover" />
      </div>
      <div className="card-body text-primary">
        <h2 className="card-title">{title}</h2>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-primary bg-primary text-light "
          rel="noreferrer"
        >
          Ir a {title}
          {
            //la idea es que aca vaya onclick con link a una nueva página con un crud del grupo seleccionado 
          }
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;