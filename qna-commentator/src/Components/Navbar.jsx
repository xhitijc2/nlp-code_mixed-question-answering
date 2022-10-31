// import { FullscreenExit } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
  return (
    <div>
      <StyledNavbarContainer>
      <StyledName>COMMENTATOR</StyledName>
      </StyledNavbarContainer>
    </div>
  )
}

export default Navbar

// const h1style = {
//     color:"White",
//     backgroundColor:"rgba(80, 35, 128, 0.9)",
//     fontSize: "26px", 
//     margin:0, 
//     cursor: "point",
//     height: "60px",
//     alignItems: "center",
//     display: "flex",
//     paddingLeft: "16px",
//     FontFace: "Arial",
//     cursor:"pointer",
// }


const StyledNavbarContainer = styled.div`
    position: fixed;
    top: 0;
    background-color: rgba(80, 35, 128, 0.9); 
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    z-index: 0;
`;
  

const StyledName = styled.p`
    color: #fefefe;
    font-size: 26px;    
    margin-left: 16px;
    cursor: pointer;
`;