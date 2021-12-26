import styled from "styled-components"


export const CloseBtn = styled.button`
background-color: transparent;
color: #fff;
border: 1px solid orange;
padding: .25rem .5rem;
border-radius: 50%;
cursor: pointer;

&:hover{
    background-color:#111;
    
}
`

export const Caption= styled.span`
font-size: .9rem;
color: #fff;
font-weight: 600;
font-family: 'Barlow',sans-serif;
`

export const Info = styled.div`
font-size: .9rem;
padding: 0 .25rem;
/* background-color: yellow; */
`

export const MovieTitle = styled.div`
display: flex;
justify-content: space-between;
color: #fff;
font-family: 'Barlow', sans-serif;
font-weight: bold;
margin-bottom:0px;
padding-bottom:0px;
`
export const MovieSubtitle = styled.h5`
padding: 0px;
`


export const MovieInfo = styled.span`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`


export const MovieDesc = styled.p`
font-size: .8rem;
`




export const ModalRow= styled.div`
display: flex;
width: 100%;
height: 100%;



/* outline: 2px solid olive; */
`

export const ModalCol = styled.div`
height: 100%;
/* outline: 1px solid red; */
max-width: 650px;
width:100%;
`
export const ModalColRight=styled.div`
height: 100%;
/* outline: 1px solid red; */
max-width: 650px;
width:100%;
background-size: cover;
background-position: 0 0;
position: relative;

`



export const Iframe = styled.iframe`
/* width: 560px;
height: 315px; */
width: 60%;
height: 70%;
min-width: 320px;
background-color: #111;

`






export const CardContainer = styled.div`
max-width: 300px;
/* width:100%; */
display: inline-block;
background-color: #111;
margin-bottom: 1rem;
/* overflow: hidden; */
position:relative;
cursor: pointer;

&:hover Button{
    opacity: 1;
}

`




export const CardImage= styled.img`
width: 300px;
 display: block;
 height: 100%;
 height: 430px;
 transform: scale(0.95);

 transition: all .4s ;

 &:hover{
     transform: scale(0.98);
     box-shadow:5px 8px 26px -3px rgba(0,0,0,0.82);
 }

`

export const CardImageFull= styled.img`
width:100%;
/* display:block; */
height: 100%;
/* object-fit: contain; */
`



export const MovieDetails = styled.div`
position: absolute;
top:0px;
left: 0px;
bottom: 0;
right: 0;
padding: 2rem;
color:#fff;
background-color: rgba(0,0,0,0.4);
letter-spacing: 1.5px;
/* font-size:1rem; */

`







export const CardTop= styled.div`
/* outline: 1px solid orange; */
/* padding-top: 50px; */

`

export const CardTitle = styled.h3`
/* background-color:orange; */

`

