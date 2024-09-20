import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { type, id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (type === "people") actions.getPeople(id);
    else if (type === "planets") actions.getPlanets(id);
    else if (type === "vehicles") actions.getVehicles(id);
  }, [type, id]);

  const entity = store[type]?.find((item) => item.uid === id) || {};

  return (
    <div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
            className="img-fluid rounded-start"
            alt={entity.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1>{entity.name}</h1>
            {type === "people" && <p>Género: {entity.gender}, Nacimiento: {entity.birth_year}</p>}
            {type === "planets" && <p>Clima: {entity.climate}, Terreno: {entity.terrain}</p>}
            {type === "vehicles" && <p>Modelo: {entity.model}, Fabricante: {entity.manufacturer}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
