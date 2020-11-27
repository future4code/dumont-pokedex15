import React, { useEffect, useState, useContext } from 'react'
import { ButtonContainer, CardContainer, ImageCardContainer} from '../pages/HomePage/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import GlobalStateContext from "../global/GlobalStateContext";
function CardPokemon(props){

    const [pokeImage, setPokeImage] = useState([])
    
    const { states,setters } = useContext(GlobalStateContext)

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
                <button onClick={props.addPokemon}>Adicionar a pokédex</button>
                <button 
                onClick={()=>goToPokeDetail(props.name)
                }>Ver detalhes</button>
            </ButtonContainer>
        </CardContainer>

    );
}

export default CardPokemon