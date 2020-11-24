import React from 'react'
import styled from "styled-components"

export const HeaderPokedex = styled.div`
    width: 100vw;
    height: 100px;
    background-color: #FFCB05;
    display: flex;
    justify-content: space-around   
`
export const PokemonImg = styled.img`
    width: 150px;
    height: 50px;
`

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const PokeCard = styled.div`
    border: 1px solid black;
    width: 250px;
    height: 300px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    margin-left: 20px;
    margin-right: 20px;
    
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Pokemon = styled.div `
    width: 250px;
    height: 300px;
    border: 1px solid black; 
`

export const DetailsButton = styled.button`
    margin-top: 20px;
    width: 120px;
    height: 40px;
    padding: 8px;
`
export const RemoveButton = styled.button`
    margin-top: 20px;
    width: 120px;
    height: 40px;
    padding: 8px;
`
export const GoToBack = styled.button`
    margin-top: 20px;
    width: 120px;
    height: 40px;
    padding: 8px;
    margin-left: 60px;
`