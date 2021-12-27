import styled from "styled-components";
import { IoIosArrowBack ,IoIosArrowForward } from "react-icons/io";



export const LeftArrow = styled(IoIosArrowBack)`
fill:rgba(0,0,0,.3);
font-size: 100px;
position: absolute;
z-index: 999;
top: 50%;
left: -30px;
padding: 0;
margin: 0;
transform: translateY(-50%);
transition: all .3s;
&:hover{
    transition: all .3s;
    fill:lightgray;
}
`

export const RightArrow = styled(IoIosArrowForward)`
fill:rgba(0,0,0,.3);
font-size: 100px;
padding: 0;
margin: 0;
position: absolute;
z-index: 999;
top: 50%;
right:0px;
transform: translateY(-50%);
transition: all .3s;
&:hover{
    transition: all .3s;
    fill:lightgray;
}

`


export const ListTitle = styled.h3`
display: inline-block;
font-family: "Barlow",sans-serif;
color:#fff;
margin-left: 2rem;
transition: all .3s ease-in-out;

&:hover{
    color: #01A2D8;
    transition: all .3s ease-in-out;

}
`




export const ListContainer = styled.div`
max-width: 100%;
`


export const ListTrack = styled.div`
/* outline: 1px solid orange; */
width: 9999999px;
transition: all .4s;

`

export const ListRow = styled.div`

overflow-x: hidden;
position: relative;
`
