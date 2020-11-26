import React, { useEffect, useContext } from "react";
import NavBar from '../../components/NavBar'
import { MainContainer } from './styles';

import GlobalStateContext from "../../global/GlobalStateContext";
import CardPokemon from "../../components/CardPokemon"
function HomePage() {
  const { states, requests } = useContext(GlobalStateContext)
  

  useEffect(() => {
    requests.getArrayPokemons();
  }, []);

  
  return (
    <div>
      <NavBar/>
      <MainContainer>
        {states.pokemonList.map((item)=>{
        return( 
          <CardPokemon
            key={item.name}
            name={item.name}
            url={item.url}
          />
           
        );
      })}
        </MainContainer>
    </div>
       
  );
}

export default HomePage;
