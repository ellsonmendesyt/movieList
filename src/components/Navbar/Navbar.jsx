import React,{useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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




    return (
        <NavbarContainer style={{backgroundColor:`${isDark ? ' #202020 ': '#111'}`}}>
            <Logo>
            <MenuItem> <MenuLink to='/'>The<HightLight>Movies</HightLight> </MenuLink></MenuItem>
            </Logo>

            <Menu>
                <MenuItem> <MenuLink to='/'>Filmes</MenuLink></MenuItem>
                <MenuItem> <MenuLink to='/ano'>Sobre</MenuLink></MenuItem>
                <MenuItem> <MenuLink to='/sobre'>Serviços</MenuLink></MenuItem>
            </Menu>
        </NavbarContainer>
    )
}


const HightLight= styled.span`
color:#01A2D8;
`

const Menu = styled.ul`
color:#fff;
list-style: none;
display: flex;
justify-content: center;
gap:1rem;

`

const MenuItem = styled.li`
font-family: 'Barlow',sans-serif;
cursor: pointer;
color: #fff;

`

const MenuLink = styled(Link)`
color: #fff;
text-decoration:none;
position: relative;

border-bottom:2px solid #01A2D8;
border-width:0px;

&:after{
    content: '';
    width:0%;
    position: absolute;
    height: 3px;
    background-color: #01A2D8;
    bottom: -6px;
    left: 0px;
    transition: width .3s ease-in-out;
}

&:hover{
    &:after{
        width: 100%;

    }
}
`





const Logo = styled.div`
color:#fff;
list-style: none;
font-family: 'Barlow',sans-serif;
font-size: 1.2rem;
`



const NavbarContainer = styled.nav`
display: flex;
align-items: center;
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
