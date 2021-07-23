import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faAlarmClock } from '@fortawesome/pro-duotone-svg-icons'
import { faFacebook, faTripadvisor } from '@fortawesome/free-brands-svg-icons'

import styled from 'styled-components'

function AnchorLinkIcon(props) {
    let iconStyle
    switch (props.icon) {
        case "faPhoneAlt":
            iconStyle = faPhoneAlt
            break

        case "faMapMarkerAlt":
            iconStyle = faMapMarkerAlt
            break

        case "faEnvelope":
            iconStyle = faEnvelope
            break

        case "faFacebook":
            iconStyle = faFacebook
            break

        case "faTripadvisor":
            iconStyle = faTripadvisor
            break

        case "faAlarmClock":
            iconStyle = faAlarmClock
            break

        default:
            iconStyle = null
    }
    return (
        <div>
            <AnchorLink size={props.size} href={props.link}>
                <FontAwesomeIcon icon={iconStyle} />
                <SpanStyle>  {props.children}</SpanStyle>
            </AnchorLink>
        </div>
    )
}
const AnchorLink = styled.a`
   font-size: ${props => props.size ? props.size : "1rem"};
 font-family: var(--poppins);
 font-weight: 300;
 color: var(--darkGrey);
 display: block;

 &:hover{ 
   color: var(--green);
   cursor: pointer;
 }
`
const SpanStyle = styled.span`
margin-left: 5px;
`
export default AnchorLinkIcon
