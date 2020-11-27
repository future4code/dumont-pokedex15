import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { ButtonContainer, DetailsButton, HeaderPokedex, MainContainer, PokeCard, Pokemon, RemoveButton, GoToBack } from './PokedexStyle';



function PokeBall(props) {
 
  const [pokeName, setPokeName] = useState({})
  const [pokeImage, setPokeImage] = useState({})

  useEffect(()=>{
    getPokeData()
  },[])
 
  const getPokeData=()=>{
    axios
    .get(props.url)
    .then((response)=>{
        setPokeImage(response.data.sprites.front_default)
        // setPokeName(response.data.name)
         console.log("DATA",response.data)
            
    })
    .catch((err)=>{ console.log(err.mensage)})
}
  return (
    <div>          
        <PokeCard>
          <Pokemon>
                <img src={pokeImage} />
                {/* <p>{pokeName}</p> */}
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
