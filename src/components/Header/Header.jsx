import React,{useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'

const Header = () => {

    const [navDark,setNavDark]=React.useState(false);

    useEffect(()=>{

        
        const trackScroll = ()=>{
            
            window.scrollY> 3? setNavDark(true): setNavDark(false);
        }
        window.addEventListener('scroll',trackScroll);
        
        return ()=>{
            window.removeEventListener('scroll',trackScroll);
            
        }
    })

    return (
        <HeaderContainer>
            <Navbar dark={navDark} />
        </HeaderContainer>
    )
}


const HeaderContainer= styled.header`
/* height: 5vh; */
/* background-color:#3d405b; */
`

export default Header
