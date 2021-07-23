import React from 'react'
import styled from 'styled-components'
function OverlayTitle(props) {
    return (
        <Container className={props.className}>
            <OverlayText size={props.size}>{props.subTitle}</OverlayText>
            <Title size={props.size}>{props.children}</Title>
        </Container>
    )
}

const Container = styled.div`
    text-transform: uppercase;
    position: relative;
    z-index: 0; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const OverlayText = styled.h3`
position: absolute;
top: 60%; 
left: ${props => props.size === "small" ? "0" : "20%"};
letter-spacing: ${props => props.size === "small" ? "2rem" : "3rem"};
transform:${props => props.size === "small" ? "translate(0%, -60%)" : "translate(-20%, -60%)"} ;
z-index: 1; 
 font-size: ${props => props.size === "small" ? "8rem" : "13rem"};
 font-family: ${props => props.size ? "var(--poppins)" : "var(--playfairDisplay)"};
 color: var(--mediumGreen);
 @media (max-width: 750px ){ 
     font-size: 10rem;
 }
  @media (max-width: 500px ){ 
     font-size: 5rem;
     letter-spacing: 1rem;

 }
`
const Title = styled.h4`
position: relative;
font-size: ${props => props.size === "small" ? "1.3rem" : "3rem"};
 font-family: var(--playfairDisplay);
 text-align:center;

 z-index: 2; 
 @media (max-width: 500px ){ 
     font-size: 2rem;
 }
 `
export default OverlayTitle
