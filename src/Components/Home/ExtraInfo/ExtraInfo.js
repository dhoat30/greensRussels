import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import OverlayTitle from '../../UI/Titles/OverlayTitle'
function ExtraInfo() {
    const [dataArray, setDataArray] = useState([])
    // using use effect so it won't keep re running on state change
    useEffect(() => {
        axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/info`)
            .then(res => {
                setDataArray(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])


    const infoArray = dataArray.map(data => {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    })

    return (
        <Container className="row-container">
            <Card>
                <OverlayTitle size="small" subTitle="13"> hello this </OverlayTitle>
            </Card>

        </Container>
    )
}

const Container = styled.section`
padding-top: 100px ; 
padding-bottom: 50px;
`
const Card = styled.div`
width: auto;
display: inline-block;
border: solid red;
`

export default ExtraInfo
