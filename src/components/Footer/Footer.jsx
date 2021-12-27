import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
           <Branding>The <HighLight>Movies</HighLight> </Branding>
           <Copyright>All rights reserved © 1996-2021, themovies.com, Inc. or its affiliates</Copyright>
        </FooterContainer>
    )
}

const Copyright = styled.p`
color:#949494;
text-align: center;
font-weight: .9rem;
font-family: "Barlow",sans-serif;
`

const Branding  = styled.h5`
color: #fff;
text-align: center;
font-family: "Barlow",sans-serif;
font-size: 1.2rem;
`

const HighLight = styled.span`
color:#01A2D8;
`


const FooterContainer= styled.footer`

background-color: #111;
color: #fff;
padding: 1rem;
`

export default Footer
