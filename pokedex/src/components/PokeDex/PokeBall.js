import React from 'react'
import { useHistory } from 'react-router-dom';
import { ButtonContainer, DetailsButton, HeaderPokedex, MainContainer, PokeCard, Pokemon, RemoveButton, GoToBack } from './PokedexStyle';



function PokeBall() {
  const history=useHistory()

  const goToPokeDetail=()=>{
    history.push(`pokeDetails/:id`)
  }
  return (
    <div>          
        <PokeCard>
          <Pokemon>
          </Pokemon>
          <ButtonContainer>
            <RemoveButton>Deletar</RemoveButton>
            <DetailsButton onClick={()=>goToPokeDetail()}>Ver Detalhes</DetailsButton>
          </ButtonContainer>
        </PokeCard> 
     </div>  
  );
}

export default PokeBall;
