import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { type, id } = useParams();  
  const { store } = useContext(Context); 

 
  const entity = store[type]?.find((item) => item.uid === id) || null;


  if (!entity || !entity.properties) {
    return <div>Loading...</div>;
  }

  const properties = entity.properties || {};

  
  const imageTypeMap = {
    people: "characters",
    starships: "starships",
    vehicles: "vehicles",
    planets: "planets",
    films: "films",
    species: "species"
  };

  const imageUrl = `https://starwars-visualguide.com/assets/img/${imageTypeMap[type]}/${id}.jpg`;

  return (
      <div className="card-single mb-3">
        <div className="row">
          <div className="col-md-4">
            <img
              src={imageUrl}
              className="img-fluid rounded-start"
              alt={properties.name || "Image"}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1>{properties.title || properties.name}</h1>
              {type === "people" && (
                <>
                  <p>Género: {properties.gender}</p>
                  <p>Nacimiento: {properties.birth_year}</p>
                </>
              )}
              {type === "planets" && (
                <>
                  <p>Clima: {properties.climate}</p>
                  <p>Terreno: {properties.terrain}</p>
                </>
              )}
              {type === "vehicles" && (
                <>
                  <p>Modelo: {properties.model}</p>
                  <p>Fabricante: {properties.manufacturer}</p>
                </>
              )}
              {type === "starships" && (
                <>
                  <p>Modelo: {properties.model}</p>
                  <p>Fabricante: {properties.manufacturer}</p>
                </>
              )}
              {type === "films" && (
                <>
                  <p>Director: {properties.director}</p>
                  <p>Productor: {properties.producer}</p>
                  <p>Fecha de lanzamiento: {properties.release_date}</p>
                </>
              )}
              {type === "species" && (
                <>
                  <p>Clasificación: {properties.classification}</p>
                  <p>Designación: {properties.designation}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};
