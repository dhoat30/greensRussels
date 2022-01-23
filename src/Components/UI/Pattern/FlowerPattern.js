import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
function FlowerPattern(props) {
    return (

        <StaticImage className={props.className} src="../../../images/flower.png" alt="luxury pattern" placeholder="blurred"
            layout="constrained"
            width={200}

        />
    )
}

export default FlowerPattern
