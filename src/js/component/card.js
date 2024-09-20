import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, image, link, onFavorite, onRemoveFavorite, isFavorite }) => {
  return (
    <div className="card" style={{ width: "18rem", position: "relative" }}>
      <div style={{ position: "absolute", top: "10px", left: "10px", cursor: "pointer" }}>
        {isFavorite ? (
          <i className="fas fa-heart text-danger" onClick={onRemoveFavorite}></i>
        ) : (
          <i className="far fa-heart" onClick={onFavorite}></i>
        )}
      </div>

      <img src={image} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* <p className="card-text">{description}</p> */}

     
        <Link to={link} className="btn btn-primary">
          Detalle
        </Link>
      </div>
    </div>
  );
};

export default Card;
