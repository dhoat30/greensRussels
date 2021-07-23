import React from 'react'
import Carousels from '../../UI/Carousels/Carousels'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/pro-duotone-svg-icons'

const query = graphql`
  {
    allWpTestimonial {
      edges {
        node {
          title
          id
          testimonialsACF {
            testimony
          }
        }
      }
    }
  }
`

function TestimonialSection() {

  const data = useStaticQuery(query)
  const dataArray = data.allWpTestimonial.edges.map(edge => {
    return {
      title: edge.node.title,
      id: edge.node.id,
      content: edge.node.testimonialsACF.testimony,
    }
  })


  return (
    <Container>
      <TestimonialBox className="row-container">
        <SectionTitle fontFamily="var(--playfairDisplay)"><FontAwesomeIcon icon={faQuoteLeft} size="2x" /></SectionTitle>
        <CarouselsStyle data={dataArray} />
      </TestimonialBox>



    </Container>
  )
}

const Container = styled.section`
background-color: var(--lightGreen);
position: relative;
margin-top: -10px;
padding: 100px 0 100px 0;

`
const TestimonialBox = styled.div`
max-width: 1000px;
margin: 0 auto;
`
const CarouselsStyle = styled(Carousels)`
margin-top:50px;
`

export default TestimonialSection
