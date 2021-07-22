import React from 'react'
import styled from 'styled-components'
function MediumFonts(props) {
    return (
        <Container className={props.className} hover={props.hover} align={props.align} color={props.color}>

            {props.children}</Container>
    )
}

const Container = styled.h6`
color: ${props => props.color};
text-align: ${props => props.align === 'center' ? 'center' : 'left'};
font-weight: 300;
line-height: 1.8rem;
letter-spacing: 0.05rem;
font-size: 1.1rem;

`
export default MediumFonts
