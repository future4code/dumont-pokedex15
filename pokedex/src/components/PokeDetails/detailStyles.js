import styled from 'styled-components'



export const ContainerPokeName= styled.div`
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
`;
export const ContainerDetails= styled.div`
   display:flex;
   height: 100vh;
   /* background-color: rgba(0,29,170,0.5); */
`;
export const ContainerImg= styled.div`
   display:flex;
   flex-direction: column;
   /* background-color: blue; */
`;

export const ContainerTypeMove= styled.div`
   display:flex;
   flex-direction: column;
   /* background-color:green; */
   
`;


export const DetailCardPhoto = styled.div`
   width: 300px;
   height: 300px;
  margin:1em;
  border:solid;
  img{
    width:250px;
    
  }
 `;
export const DetailCardInfo = styled.div`
width:30vw;
height:640px;
border:solid;
margin:1em;
background-color: rgba(0,29,170,0.5);
h4,p{
  margin-left:2em;
}
`;

export const DetailCardTypes = styled.div`
display:flex;
justify-content:space-around;
width:40vw;
height:100px;
border:solid;
margin:1em;
background-color: rgba(0,29,170,0.5);
`;
export const DetailCardMoves = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:40vw;
height:500px;
border:solid;
margin:1em;
background-color: rgba(0,29,170,0.5);
`;