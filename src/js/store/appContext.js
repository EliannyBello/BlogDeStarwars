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
        setState((prevState) => ({
          ...prevState,
          people: data.results,
        }));
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      }
    },

    getPlanets: async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/planets`);
        const data = await response.json();
        setState((prevState) => ({
          ...prevState,
          planets: data.results,
        }));
      } catch (error) {
        console.error("Error al obtener los planetas:", error);
      }
    },

    getStarships: async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/starships`);
        const data = await response.json();
        setState((prevState) => ({
          ...prevState,
          starships: data.results,
        }));
      } catch (error) {
        console.error("Error al obtener las naves:", error);
      }
    },

    getVehicles: async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/vehicles`);
        const data = await response.json();
        setState((prevState) => ({
          ...prevState,
          vehicles: data.results,
        }));
      } catch (error) {
        console.error("Error al obtener los vehículos:", error);
      }
    },

    getFilms: async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/films`);
        const data = await response.json();
        setState((prevState) => ({
          ...prevState,
          films: data.result,
        }));
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    },

    getSpecies: async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/species`);
        const data = await response.json();
        setState((prevState) => ({
          ...prevState,
          species: data.results,
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
