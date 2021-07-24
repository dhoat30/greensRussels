import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import AboutContent from './AboutContent/AboutContent'

const query = graphql

function AboutPage() {

  return (
    <Container>


    </Container>
  )
}
const Container = styled.section`
background: var(--darkBlue);
margin-bottom: -10px;

`
export default AboutPage
