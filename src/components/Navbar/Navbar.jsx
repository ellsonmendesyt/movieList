import React,{useContext} from 'react'
import styled from 'styled-components'

import { MoviesContext } from '../../contexts/movieContext'

const Navbar = (props) => {



const store = useContext(MoviesContext)





    return (
        <NavbarContainer>
            <p>{store.movies.length}</p>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.nav`
background-color: ${props=> props.dark ? "red": "magenta"};
height: 30px;
max-width: 100%;

 padding: 1rem;
`

export default Navbar
