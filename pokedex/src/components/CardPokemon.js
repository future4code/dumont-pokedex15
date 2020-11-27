import React, { useEffect, useState, useContext } from 'react'
import { ButtonContainer, CardContainer, ImageCardContainer} from '../pages/HomePage/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import GlobalStateContext from "../global/GlobalStateContext";
function CardPokemon(props){

    const [pokeImage, setPokeImage] = useState([])
    
    const { states,setters } = useContext(GlobalStateContext)

    const history=useHistory()

  const goToPokeDetail=(id)=>{
    history.push(`pokeDetails/${id}`)
  }
  useEffect(()=>{
    getPokeImage()
  },[])

  const getPokeImage =()=>{
      axios
      .get(props.url)
      .then((response)=>{
          setPokeImage(response.data.sprites.front_default)
          
          let thisPokemon = [response.data]
          setters.setPokeDetail([thisPokemon])
          console.log("ESTADOS", thisPokemon)
      })
      .catch((err)=>{ console.log(err.mensage)})
  }
    return(
        <CardContainer>
            <ImageCardContainer>
                <img src={pokeImage}/>
                <p>{props.name}</p>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button 
                onClick={()=>goToPokeDetail(props.name)
                }>Ver detalhes</button>
            </ButtonContainer>
        </CardContainer>

    );
}

export default CardPokemon