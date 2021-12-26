import React from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header'

import {LayoutContainer,Page} from './Layout.styles'

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




export default Layout
