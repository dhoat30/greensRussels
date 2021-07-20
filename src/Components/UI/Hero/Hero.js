import AnchorLink from '../AnchorLink/AnchorLink'
import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../Titles/SectionTitle'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ElephantPattern from '../Pattern/ElephantPattern'
import Carousel from 'react-bootstrap/Carousel'

function Hero(props) {
    console.log(props.data)
    const desktopImage = getImage(props.data.imageSharp)
    const mobileImage = getImage(props.data.mobileImage)
    return (
        <Container >


            <Content className="row-container">
                <SectionTitle subTitle={props.data.subtitle} color="white"> {props.data.title} </SectionTitle>
                <ButtonsContainer>
                    <AnchorLink link={props.data.orderOnlineLink} background={true} targetBlank={true}> Order Online </AnchorLink>
                    <AnchorLink showIcon={false}>Book a table</AnchorLink>
                </ButtonsContainer>
            </Content>
            <DesktopGatsbyImage image={desktopImage} alt={props.data.title} />
            <MobileGatsbyImage image={mobileImage} alt={props.data.title} />

            <PatternContainer className="row-container">
                <ElephantPatternStyle />
                <ElephantPatternStyle2 />
            </PatternContainer>


        </Container>
    )
}
const Container = styled.div`
position: relative;
background-color: var(--lightGreen);
`

const ButtonsContainer = styled.div`
width: 350px;
margin: 0 auto;
 display: flex;
 flex-direction: row;
  align-items: center;
  justify-content:space-around;
@media (max-width: 500px){ 
    flex-direction: column;
    height: 100px;
    width: 200px;
}`

const Content = styled.div`
position: absolute;
top: 20px;
width: 100%;
z-index: 10;
left: 50%; 
transform: translate(-50%,0);
`
const DesktopGatsbyImage = styled(GatsbyImage)`
height: 100%;
max-width: 1386px;
margin: 0 auto;
z-index: 2;
@media (max-width: 850px){
    display: none;
}
`
const MobileGatsbyImage = styled(GatsbyImage)`
@media (max-width: 850px){
    display: block;
}
display: none;
@media (max-width: 400px){ 
    height: 350px;
}
`
const PatternContainer = styled.div`
position: relative;
@media (max-width: 700px){
display: none;
}
`
const ElephantPatternStyle = styled(ElephantPattern)`
z-index: 0;
bottom: 0;
position: absolute;
left: -100px;
`
const ElephantPatternStyle2 = styled(ElephantPattern)`
z-index: 0;
bottom: 0;
position: absolute;
right: -100px;
transform: scaleX(-1);
`
export default Hero
