import React from 'react'
import PokeBall from './PokeBall';
import { HeaderPokedex, MainContainer, GoToBack, PokeCard, PokemonImg } from './PokedexStyle';
import NavBar from '../../components/NavBar'


function PokedexPage() {
  return (
    <div>
      <NavBar/>
      <MainContainer>
        <PokeBall />
            
                
      </MainContainer>
    </div>  
  );
}

export default PokedexPage;
