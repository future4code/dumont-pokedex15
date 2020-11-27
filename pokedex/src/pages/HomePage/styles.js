import styled from 'styled-components'

export const MainContainer = styled.div `
    width: 100vw;
    height: 92vh;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const CardContainer = styled.div `
    display: grid;
    grid-template-rows: 90% 10%;
    margin: 32px;
    width: 250px;
    height: 35vh;
    border-radius: 10px;
    box-shadow: 6px 6px 10px rgba(142, 142, 142, 20%);
`;
export const ImageCardContainer = styled.div `
    background-color: #F2F2F2;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    width: 250px;
    height: 35vh;
    border-radius: 10px;

    img {
        margin-top: -50px;
        width: 120px;
    }
`;

export const PokeInfo = styled.div`
    background-color: #FFFFFF;
    height: 95px;
    width: 225px;
    border-radius: 10px;
    position: absolute;
    margin-top: 190px;
    margin-left: 9px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    

    h3{
        margin-left: 16px;
        font-size: 16px;
    }
`

export const ButtonContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: center;
    margin-right: 16px;
`;

export const AddPokemon = styled.div`
    background-color: #EED535;
    width: 100px;
    height: 30px;
    margin-left: 16px;
`
export const Details = styled.div`
    background-color: #EED535;
    width: 100px;
    height: 30px;
    margin-left: 10px;
`
