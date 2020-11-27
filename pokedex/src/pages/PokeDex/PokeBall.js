import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { ButtonContainer, DetailsButton, HeaderPokedex, MainContainer, PokeCard, Pokemon, RemoveButton, GoToBack } from './PokedexStyle';



function PokeBall(props) {
 
  const [pokeImage, setPokeImage] = useState([])
  

 
  
  useEffect(()=>{
    getPokeImage()
  },[])

  
 
  const getPokeImage =()=>{
    axios
    .get(props.url)
    .then((response)=>{
        setPokeImage(response.data.sprites.front_default)
         
            
    })
    .catch((err)=>{ console.log(err.mensage)})
}
  return (
    <div>          
        <PokeCard>
          <Pokemon>
            <img src={pokeImage} />
            <p>{props.name}</p>
          </Pokemon>
          <ButtonContainer>
            <RemoveButton onClick={props.removePokemon}>Deletar</RemoveButton>
            <DetailsButton onClick={props.pokeDetail}>Ver Detalhes</DetailsButton>
          </ButtonContainer>
        </PokeCard> 
     </div>  
  );
}

export default PokeBall;
