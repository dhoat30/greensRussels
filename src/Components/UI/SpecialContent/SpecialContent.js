import React from 'react'
import styled from 'styled-components'
import OverlayTitle from '../Titles/OverlayTitle'
import ImageCard from '../../UI/ImageCard/ImageCard'

function SpecialContent(props) {

    return (
        <Container>
            <OverlayTitle subTitle={props.subTitle}> {props.title} </OverlayTitle>

            <DishesContainer className="row-container">
                <Content>
                    {props.content}
                </Content>

            </DishesContainer>
            <ImageCardFirst key={props.imagesArray[0].id} image={props.imagesArray[0].image} title={props.imagesArray[0].title} />
            <ImageCardSecond key={props.imagesArray[1].id} image={props.imagesArray[1].image} title={props.imagesArray[1].title} />

        </Container>
    )
}
const Container = styled.div`
position: relative;
`
const DishesContainer = styled.div`
margin-top: 50px;
display: flex;
justify-content: center;

`
const Content = styled.div`
max-width: 350px;
`
const ImageCardFirst = styled(ImageCard)`
position: absolute;
width: 100%;
max-width: 450px;
bottom: -100px;
@media (max-width: 1400px){
    width: 100%;
max-width: 350px;
height: 500px;
}
@media (max-width: 1100px){
    width: 100%;
max-width: 250px;
height: 500px;
}
@media (max-width: 900px){
  display: none;
}
`
const ImageCardSecond = styled(ImageCard)`
position: absolute;
top: -100px;
right: 0;
width: 100%;
max-width: 450px;
@media (max-width: 1400px){
    width: 100%;
max-width: 350px;
height: 500px;
}
@media (max-width: 1100px){
    width: 100%;
max-width: 250px;
height: 500px;
}
@media (max-width: 900px){
  display: none;
}
`

export default SpecialContent
