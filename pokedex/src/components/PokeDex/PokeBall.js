import React from 'react'
import { ButtonContainer, DetailsButton, HeaderPokedex, MainContainer, PokeCard, Pokemon, RemoveButton, GoToBack } from './PokedexStyle';



function PokeBall() {
  return (
    <div>          
        <PokeCard>
          <Pokemon>
          </Pokemon>
          <ButtonContainer>
            <RemoveButton>Deletar</RemoveButton>
            <DetailsButton>Ver Detalhes</DetailsButton>
          </ButtonContainer>
        </PokeCard> 
     </div>  
  );
}

export default PokeBall;
