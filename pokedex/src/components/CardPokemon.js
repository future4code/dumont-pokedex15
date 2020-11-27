import React, { useEffect, useState } from 'react'
import { ButtonContainer, CardContainer, ImageCardContainer} from '../pages/HomePage/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import GlobalStateContext from "../global/GlobalStateContext";
function CardPokemon(props){

    const [pokeImage, setPokeImage] = useState([])
    
    
    const BASE_URL= "https://pokeapi.co/api/v2"

    const history=useHistory()

    useEffect(()=>{
        getPokeImage()
      },[])

    const goToPokeDetail=(id)=>{
        axios.get(`${BASE_URL}/pokemon/${id}`)
        .then((response)=>{
          history.push(`pokeDetails/${id}`)
        }).catch((error)=>{
          console.log(error)
        })
        
    }

 
    const getPokeImage =()=>{
      axios
      .get(props.url)
      .then((response)=>{
          setPokeImage(response.data.sprites.front_default)
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
                <button onClick={props.addPokemon}>Adicionar a pokédex</button>
                <button 
                onClick={()=>goToPokeDetail(props.name)
                }>Ver detalhes</button>
            </ButtonContainer>
        </CardContainer>

    );
}

export default CardPokemon