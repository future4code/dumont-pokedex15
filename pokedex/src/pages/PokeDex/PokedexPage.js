import React from 'react'
import PokeBall from './PokeBall';
import { HeaderPokedex, MainContainer, GoToBack, PokeCard, PokemonImg } from './PokedexStyle';
// import LogoPokemon from "../../assets/pokemon-logo.png"


function PokedexPage() {
  return (
    <div>
      <HeaderPokedex>
          {/* <PokemonImg src={LogoPokemon} /> */}
          <GoToBack>Voltar</GoToBack>         
      </HeaderPokedex>
      <MainContainer>
        <PokeBall />
        <PokeBall />
        <PokeBall />
        <PokeBall />
        <PokeBall />
       
                
      </MainContainer>
    </div>  
  );
}

export default PokedexPage;
