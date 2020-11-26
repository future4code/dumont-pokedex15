import React from 'react'
// import NavBar from '../components/NavBar'
import { ContainerPokeName,ContainerDetails,ContainerImg,DetailCardPhoto,DetailCardInfo,ContainerTypeMove, DetailCardTypes,DetailCardMoves} from './detailStyles';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/NavBar';


function PokeDetailsPage() {
  const history=useHistory()

  const goToPokedex=()=>{
    history.push(`/pokedexPage`)
  } 
  return (<div>
    <NavBar />
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
