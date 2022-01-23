import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
function ImageCard(props) {
    const image = getImage(props.image)

    return (

        <GatsbyImageStyle image={image} alt={props.title}
            className={props.className}
        />
    )
}
const GatsbyImageStyle = styled(GatsbyImage)`
    border-radius: 20px;
    box-shadow: 6px 5px 26px 4px rgba(200,252,200,1);
-webkit-box-shadow: 6px 5px 26px 4px rgba(200,252,200,1);
-moz-box-shadow: 6px 5px 26px 4px rgba(200,252,200,1);
`

export default ImageCard
