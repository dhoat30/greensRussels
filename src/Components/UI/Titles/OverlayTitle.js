import React from 'react'
import styled from 'styled-components'
function OverlayTitle(props) {
    return (
        <Container>
            <OverlayText>{props.subTitle}</OverlayText>
            <Title>{props.children}</Title>
        </Container>
    )
}

const Container = styled.div`
    text-transform: uppercase;
    position: relative;
    z-index: 0; 
`

const OverlayText = styled.h3`
position: absolute;
top: 60%; 
left: 20%;
letter-spacing: 3rem;
transform: translate(-20%, -60%);
z-index: 1; 
 font-size: 13rem;
 font-family: var(--playfairDisplay);
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
font-size: 3rem;
 font-family: var(--playfairDisplay);
 text-align: center;
 z-index: 2; 
 @media (max-width: 500px ){ 
     font-size: 2rem;
 }
 `
export default OverlayTitle
