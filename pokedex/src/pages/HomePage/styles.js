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
    margin: 10px;
    width: 250px;
    height: 35vh;
`;
export const ImageCardContainer = styled.div `
    background-color: lightgrey;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
`;

export const ButtonContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
`;