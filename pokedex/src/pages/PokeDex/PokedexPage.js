import React, { useEffect } from 'react'
import PokeBall from './PokeBall';
import { HeaderPokedex, MainContainer, GoToBack, PokeCard, PokemonImg } from './PokedexStyle';
import NavBar from '../../components/NavBar'
import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


function PokedexPage() {

  const {states, setters} = useContext(GlobalStateContext)
  const history=useHistory()

  const BASE_URL= "https://pokeapi.co/api/v2"

  const goToPokeDetail=(id)=>{
    axios.get(`${BASE_URL}/pokemon/${id}`)
    .then((response)=>{
      history.push(`pokeDetails/${id}`)
    }).catch((error)=>{
      console.log(error)
    })
    
}
// useEffect(()=>{
//   deletePokemon()
// },[])

// const deletePokemon = (remove) => {
//   const index = states.pokeDex.findIndex((i) => i.name === remove.name)
//   let newPokeDex = [...states.pokeDex]
//   newPokeDex.splice(index, 1)
//   setters.setPokeDex(newPokeDex)
 
//   console.log(`INDEX`,index)
//   console.log("POKEDEX", states.pokeDex)
// }

const deletePokemon=(selectPokemon) =>{
  const newPokedex = states.pokeDex.filter((pokemon)=>{
    return pokemon.name !==selectPokemon.name
  })
  const newPokeList = [...states.pokemonList, selectPokemon]
  setters.setPokeDex(newPokedex)
  setters.setPokemonList(newPokeList)
  window.alert(`${selectPokemon.name} foi removido da sua pokédex`)

  // console.log(`INDEX`,index)
  console.log("POKEDEX", states.pokeDex)

}

  return (
    <div>
      <NavBar/>
      {states.pokeDex.map((pokemon)=>{
        return(
        <MainContainer>
         <PokeBall
          url={pokemon.url}
          pokeDetail = {()=>goToPokeDetail(pokemon.name)}
          removePokemon = {()=>deletePokemon(pokemon)}
          />
        </MainContainer>
        )
      })}
      
    </div>  
  );
}

export default PokedexPage;
