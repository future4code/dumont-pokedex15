import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'


const NavBarContainer=styled.div`
display:flex;
justify-content: space-around;

bottom: 0px;
margin:0px;
width:100vw;
height:100%;
padding: 2em;
background-color: yellow;
img{
  width:200px;
}

button{
  border:none;
  width: 100px;
  background-color: blue;
  color: yellow;
  font-size:20px;
}
`

function NavBar() {

  const history=useHistory()

  const goToPokeDetail=()=>{
    history.push(`pokeDetails/:id`)
  } 

  const goToHome=()=>{
    history.push(`/`)
  } 
  const goToPokedex=()=>{
    history.push(`/pokedexPage`)
  } 
  return (
    <NavBarContainer>
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon logo"/>
       <button onClick={goToHome}>Home</button>
       <button onClick={goToPokedex}>Pokedex</button>
       <button onClick={()=>goToPokeDetail()}>Detalhe</button>
    </NavBarContainer>
       
  );
}

export default NavBar;
