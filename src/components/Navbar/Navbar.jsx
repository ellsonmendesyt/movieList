import React,{useContext} from 'react'
import styled from 'styled-components'

import { MoviesContext } from '../../contexts/movieContext'

const Navbar = () => {
const [isDark,setIsDark]=React.useState(false);

//consume data from the store
const store = useContext(MoviesContext)

React.useEffect(()=>{  
    const trackScroll = ()=>{
        window.scrollY> 3? setIsDark(true): setIsDark(false);
    }
    window.addEventListener('scroll',trackScroll);
    return ()=>{
        window.removeEventListener('scroll',trackScroll);
        
    }
})



// #240046  #001233
    return (
        <NavbarContainer style={{backgroundColor:`${isDark ? ' #202020 ': '#111'}`}}>
            <p>{store.movies.length}</p>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.nav`
height: 30px;
max-width: 100%;
position: fixed;
top:0px;
left: 0;
right: 0px;
 padding: 1rem;
 z-index: 999;
 transition: all .3s ease-in-out;
`

export default Navbar
