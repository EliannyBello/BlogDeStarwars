import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container justify-content-center">
      <h1>Characters</h1>
      <div className="row">
        {store.people.map((person, index) => (
          <div key={index} className="col-md-4">
            <Card
              title={person.name}
              // description={`ID: ${person.uid}`}
              image={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
              onFavorite={() => actions.addFavorite(person)}
              onRemoveFavorite={() => actions.removeFavorite(person)}
              isFavorite={store.favorites.some(fav => fav.uid === person.uid)}
              link={`/detail/people/${person.uid}`}
            />
          </div>
        ))}
      </div>

      <h1>Vehicles</h1>
      <div className="row">
        {store.vehicles.map((vehicle, index) => (
          <div key={index} className="col-md-4">
            <Card
              title={vehicle.name}
              description={`ID: ${vehicle.uid}`}
              image={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
              onFavorite={() => actions.addFavorite(vehicle)}
              onRemoveFavorite={() => actions.removeFavorite(vehicle)}
              isFavorite={store.favorites.some(fav => fav.uid === vehicle.uid)}
              link={`/detail/vehicles/${vehicle.uid}`}
            />
          </div>
        ))}
      </div>

    
      <h1>Starships</h1>
      <div className="row">
        {store.starships.map((starship, index) => (
          <div key={index} className="col-md-4">
            <Card
              title={starship.name}
              description={`ID: ${starship.uid}`}
              image={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
              onFavorite={() => actions.addFavorite(starship)}
              onRemoveFavorite={() => actions.removeFavorite(starship)}
              isFavorite={store.favorites.some(fav => fav.uid === starship.uid)}
              link={`/detail/starships/${starship.uid}`}
            />
          </div>
        ))}
      </div>

      <h1>Planets</h1>
      <div className="row">
        {store.planets.map((planet, index) => (
          <div key={index} className="col-md-4">
            <Card
              title={planet.name}
              description={`ID: ${planet.uid}`}
              image={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              onFavorite={() => actions.addFavorite(planet)}
              onRemoveFavorite={() => actions.removeFavorite(planet)}
              isFavorite={store.favorites.some(fav => fav.uid === planet.uid)}
              link={`/detail/planets/${planet.uid}`}
            />
          </div>
        ))}
      </div>

      
      <h1>Films</h1>
      <div className="row">
        {store.films.map((film, index) => (
          <div key={index} className="col-md-4">
            <Card
              title={film.properties.title}
              description={`ID: ${film.uid}`}
              image={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
              onFavorite={() => actions.addFavorite(film)}
              onRemoveFavorite={() => actions.removeFavorite(film)}
              isFavorite={store.favorites.some(fav => fav.uid === film.uid)}
              link={`/detail/films/${film.uid}`}
            />
          </div>
        ))}
      </div>

    
      <h1>Species</h1>
      <div className="row">
        {store.species.map((specie, index) => (
          <div key={index} className="col-md-4">
            <Card
              title={specie.name}
              description={`ID: ${specie.uid}`}
              image={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
              onFavorite={() => actions.addFavorite(specie)}
              onRemoveFavorite={() => actions.removeFavorite(specie)}
              isFavorite={store.favorites.some(fav => fav.uid === specie.uid)}
              link={`/detail/species/${specie.uid}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


