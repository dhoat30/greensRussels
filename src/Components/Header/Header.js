import React from 'react'
import Logo from '../UI/Logo/Logo'
import Navbar from './Navbar/Navbar'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import AnchorLink from '../UI/AnchorLink/AnchorLink'

const query = graphql`
{
    allWpSlider {
      edges {
        node {
          id
          sliderACF {
            orderOnlineLink
          }
        }
      }
    }
    firstHalfMenu: allWpMenuItem(
      filter: {locations: {eq: MAIN_MENU}}
      sort: {fields: order, order: ASC}
      limit: 3
    ) {
      edges {
        node {
          id
          url
          label
        }
      }
    }
    secondHalfMenu: allWpMenuItem(
      filter: {locations: {eq: MAIN_MENU}}
      sort: {fields: order, order: ASC}
      limit: 3
      skip: 3
    ) {
      edges {
        node {
          id
          url
          label
        }
      }
    }
    mobileMenu: allWpMenuItem(
      filter: {locations: {eq: MAIN_MENU}}
      sort: {fields: order, order: ASC}
    ) {
      edges {
        node {
          id
          url
          label
        }
      }
    }
  }
`




function Header() {
  const data = useStaticQuery(query)
  const dataArray = data.allWpSlider.edges.map(edge => {
    return {
      id: edge.node.id,
      orderOnlineLink: edge.node.sliderACF.orderOnlineLink,

    }
  })

  const firstMenu = useStaticQuery(query)
  const firstMenuArrayData = firstMenu.firstHalfMenu.edges

  const secondHalfMenu = useStaticQuery(query)
  const secondMenuArrayData = secondHalfMenu.secondHalfMenu.edges

  const mobileMenuData = useStaticQuery(query)
  const mobileMenuArrayData = mobileMenuData.mobileMenu.edges

  return (
    <Container>

      <DesktopNavbar className="row-container">
        <Navbar firstMenuArray={firstMenuArrayData} />
        <LinkStyle to="/"> <Logo header={true} width="200px" /></LinkStyle>
        <Navbar firstMenuArray={secondMenuArrayData} />
      </DesktopNavbar>

      <MobileNavbar className="row-container">
        <LinkStyle to="/"> <Logo header={true} width="200px" /></LinkStyle>
        <Navbar firstMenuArray={mobileMenuArrayData} />
      </MobileNavbar>
    </Container>
  )
}

const Container = styled.div`
    background: var(--lightGreen);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @media(max-width: 1000px){
        
    }
`
const AnchorLinkStyle = styled(AnchorLink)`
@media(max-width: 1000px){
    display: none;
}
`
const LinkStyle = styled(Link)`
margin: 0 30px;
`
const DesktopNavbar = styled.div`
@media (min-width : 1000px){ 
  display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
}
display: none;
`

const MobileNavbar = styled.div`
display: none;

 @media (max-width: 1000px){
   display: block;
   display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
 }

`
export default Header
