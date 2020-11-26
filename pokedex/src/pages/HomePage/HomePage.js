import React, { useEffect, useContext } from "react";
import NavBar from '../../components/NavBar'
import { MainContainer } from './styles';

import GlobalStateContext from "../../global/GlobalStateContext";
import CardPokemon from "../../components/CardPokemon"
function HomePage() {
  const { states, requests } = useContext(GlobalStateContext)
  // const pokemons = request.getArrayPokemons()

  useEffect(() => {
    requests.getArrayPokemons();
  }, []);

  
  return (
    <div>
      <NavBar/>
      <MainContainer>
        {states.pokemonList.map((item)=>{
        return( 
          <CardPokemon
            name={item.name}
            url={item.url}
          />
          // 
        );
      })}
        
          {/* <CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=2'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button onClick={()=>goToPokeDetail()}>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer><CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=3'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button onClick={()=>goToPokeDetail()}>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer><CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=4'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button onClick={()=>goToPokeDetail()}>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer><CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=5'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer><CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=6'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer><CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=7'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer><CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=8'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>   
            </ButtonContainer>
          </CardContainer><CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=9'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer><CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=10'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer>
          <CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=11'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer>
          <CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=12'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer>
          <CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=13'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer>
          <CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=14'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer>
          <CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=15'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer>
          <CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=16'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer>
          <CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=17'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer>
          <CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=18'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer>
          <CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=19'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer>
          <CardContainer>
            <ImageCardContainer>
                <img src='https://picsum.photos/70/?random=20'/>
            </ImageCardContainer>
            <ButtonContainer>
                <button>Adicionar a pokédex</button>
                <button>Ver detalhes</button>
            </ButtonContainer>
          </CardContainer> */}
        </MainContainer>
    </div>
       
  );
}

export default HomePage;
