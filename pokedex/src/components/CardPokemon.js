import React, { useEffect, useState } from 'react'
import { ButtonContainer, CardContainer, ImageCardContainer} from '../pages/HomePage/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function CardPokemon(props){

    const [pokeImage, setPokeImage] = useState([])
    
    const history=useHistory()

  const goToPokeDetail=()=>{
    history.push(`pokeDetails/:id`)
  }
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
    return(
        <CardContainer>
            <ImageCardContainer>
                <img src={pokeImage}/>
                <p>{props.name}</p>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button onClick={()=>goToPokeDetail()}>Ver detalhes</button>
            </ButtonContainer>
        </CardContainer>

    );
}

export default CardPokemon