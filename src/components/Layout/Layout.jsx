import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import Header from '../Header'

const Layout = ({children}) => {
    return (
        <LayoutContainer>
            <Header />
            <Page>
            {children}
            </Page>
            <Footer />
        </LayoutContainer>
    )
}




const LayoutContainer= styled.main`
`

const Page = styled.div`
background-color: #ddd;
/* height: 100vh; */

`


export default Layout
