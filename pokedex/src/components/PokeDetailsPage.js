import React from 'react'
// import NavBar from '../components/NavBar'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

const ContainerPokeName= styled.div`
    display:flex;
    background-color:rgba(0,29,170);
    width:100vw;
    height:100px;
    margin: 1em;
    h1{
      color:yellow;
      margin: 0em 10em;
    }
    button{
      border: none;
      border-radius:50%;
      height: 50px;
      background-color: red ;
      font-size:30px;
      margin-left: 1em;
      margin-top:25px;
      :hover{
        background-color:yellow;
      }
    }
`
const ContainerDetails= styled.div`
   display:flex;
   height: 100vh;
   /* background-color: rgba(0,29,170,0.5); */
`
const ContainerImg= styled.div`
   display:flex;
   flex-direction: column;
   /* background-color: blue; */
`

const ContainerTypeMove= styled.div`
   display:flex;
   flex-direction: column;
   /* background-color:green; */
   
`


const DetailCardPhoto = styled.div`
  width:25vw;
  height:300px;
  margin:1em;
  border:solid;
  img{
    width:300px;
    
  }
 `
const DetailCardInfo = styled.div`
width:30vw;
height:640px;
border:solid;
margin:1em;
background-color: rgba(0,29,170,0.5);
h4,p{
  margin-left:2em;
}
`

const DetailCardTypes = styled.div`
display:flex;
justify-content:space-around;
width:40vw;
height:100px;
border:solid;
margin:1em;
background-color: rgba(0,29,170,0.5);
`
const DetailCardMoves = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:40vw;
height:500px;
border:solid;
margin:1em;
background-color: rgba(0,29,170,0.5);
`
function PokeDetailsPage() {
  const history=useHistory()

  const goToPokedex=()=>{
    history.push(`/pokedexPage`)
  } 
  return (<div>
    {/* <NavBar/> */}
    <ContainerPokeName>
      <button onClick={goToPokedex}>voltar</button>
      <h1>Nome do pokemon</h1>
      <button onClick={""}>X</button>
    </ContainerPokeName>

    <ContainerDetails>

      <ContainerImg>
        < DetailCardPhoto>
          <img src="https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png"/>
        </ DetailCardPhoto>
        < DetailCardPhoto>
          <img src="https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png"/>
        </ DetailCardPhoto>
      </ContainerImg>

      
      <DetailCardInfo>
        <h4>Status</h4>
        <p>HP: 46</p>
        <p>Attack: 46</p>
        <p>Defense: 46</p>
        <p>Special-attack: 46</p>
        <p>Special-defense: 46</p>
        <p>speed: 46</p>
        
      </DetailCardInfo>

      <ContainerTypeMove>
        <DetailCardTypes>
          <h4>Type 1</h4>
          <h4>Type 2</h4>
        </DetailCardTypes>
            
        <DetailCardMoves>
          <h4> Moves</h4>
          <p> moves name 1</p>
          <p> moves name 2</p>
          <p> moves name 3</p>
        </DetailCardMoves>
      </ContainerTypeMove>
    </ContainerDetails>
  </div>
    
       
  );
}

export default PokeDetailsPage;
