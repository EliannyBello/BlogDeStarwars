import React, { useState, useEffect, createContext } from "react";

export const Context = createContext({});

const InjectContext = ({ children }) => {
  const [state, setState] = useState({
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
    favorites: []
  });

  const actions = {
    getPeople: async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people`);
        const data = await response.json();
        const detailedPeople = await Promise.all(
          data.results.map(async (person) => {
            const res = await fetch(`https://www.swapi.tech/api/people/${person.uid}`);
            const details = await res.json();
            return { ...person, properties: details.result.properties };
          })
        );
        setState((prevState) => ({
          ...prevState,
          people: detailedPeople,
        }));
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      }
    },

    getPlanets: async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/planets`);
        const data = await response.json();
        const detailedPlanets = await Promise.all(
          data.results.map(async (planet) => {
            const res = await fetch(`https://www.swapi.tech/api/planets/${planet.uid}`);
            const details = await res.json();
            return { ...planet, properties: details.result.properties };
          })
        );
        setState((prevState) => ({
          ...prevState,
          planets: detailedPlanets,
        }));
      } catch (error) {
        console.error("Error al obtener los planetas:", error);
      }
    },

    getStarships: async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/starships`);
        const data = await response.json();
        const detailedStarships = await Promise.all(
          data.results.map(async (starship) => {
            const res = await fetch(`https://www.swapi.tech/api/starships/${starship.uid}`);
            const details = await res.json();
            return { ...starship, properties: details.result.properties };
          })
        );
        setState((prevState) => ({
          ...prevState,
          starships: detailedStarships,
        }));
      } catch (error) {
        console.error("Error al obtener las naves:", error);
      }
    },

    getVehicles: async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/vehicles`);
        const data = await response.json();
        const detailedVehicles = await Promise.all(
          data.results.map(async (vehicle) => {
            const res = await fetch(`https://www.swapi.tech/api/vehicles/${vehicle.uid}`);
            const details = await res.json();
            return { ...vehicle, properties: details.result.properties };
          })
        );
        setState((prevState) => ({
          ...prevState,
          vehicles: detailedVehicles,
        }));
      } catch (error) {
        console.error("Error al obtener los vehículos:", error);
      }
    },

    getFilms: async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/films`);
        const data = await response.json();
        const detailedFilms = await Promise.all(
          data.result.map(async (film) => {
            const res = await fetch(`https://www.swapi.tech/api/films/${film.uid}`);
            const details = await res.json();
            return { ...film, properties: details.result.properties };
          })
        );
        setState((prevState) => ({
          ...prevState,
          films: detailedFilms,
        }));
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    },

    getSpecies: async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/species`);
        const data = await response.json();
        const detailedSpecies = await Promise.all(
          data.results.map(async (specie) => {
            const res = await fetch(`https://www.swapi.tech/api/species/${specie.uid}`);
            const details = await res.json();
            return { ...specie, properties: details.result.properties };
          })
        );
        setState((prevState) => ({
          ...prevState,
          species: detailedSpecies,
        }));
      } catch (error) {
        console.error("Error al obtener las especies:", error);
      }
    },

    addFavorite: (item) => {
      setState((prevState) => ({
        ...prevState,
        favorites: [...prevState.favorites, item],
      }));
    },

    removeFavorite: (item) => {
      setState((prevState) => ({
        ...prevState,
        favorites: prevState.favorites.filter(fav => fav.uid !== item.uid),
      }));
    },
  };

  useEffect(() => {
    actions.getPeople();
    actions.getPlanets();
    actions.getStarships();
    actions.getVehicles();
    actions.getFilms();
    actions.getSpecies();
  }, []);

  return (
    <Context.Provider value={{ store: state, actions }}>
      {children}
    </Context.Provider>
  );
};

export default InjectContext;
