import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
// import { useHistory } from 'react-router-dom';

const GlobalState = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokeDex, setPokeDex] = useState([]);
  

  const BASE_URL= "https://pokeapi.co/api/v2"

  

  const getArrayPokemons = () => {
    axios
      .get(`${BASE_URL}/pokemon`)
      .then((response) => {
        setPokemonList(response.data.results)
        console.log(response)
      })
      .catch((error) => {console.log(error.message)      
    })
  };

  const states = { pokemonList, pokeDex };
  const setters = { setPokemonList, setPokeDex };
  const requests = {getArrayPokemons};

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;