import React from 'react'
import styled from 'styled-components'

import { cardWidth } from '../../constants'

import Modal from 'react-modal'
import axios from 'axios'

import {MoviesContext} from '../../contexts/movieContext'


const Card = ({item}) => {


    const API_KEY='3b88845e949fdf7b792077a7a905048d';
    const BASE_URL='https://api.themoviedb.org/3';
    const store=React.useContext(MoviesContext)


 const [isModalOpen, setIsModalOpen]=React.useState(false);
 const [videoId,setVideoId]=React.useState(0);
const [videoKey,setVideoKey]=React.useState('');
const [itemExtended,setItemExtended]=React.useState(null);



 const handleModal=async(id)=>{
    // https://www.youtube.com/watch?v=INLzqh7rZ-U

    const res =await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`)
  
    
   const itemMoreInfo= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3b88845e949fdf7b792077a7a905048d&language=pt-BR`)
   

   
   // console.log(res.data.results[0].key)
   setVideoKey(res.data.results[0].key);
   setItemExtended(itemMoreInfo.data)
   setIsModalOpen(true);
   setVideoId();
   
   
}

itemExtended && console.log(itemExtended)

    return (
        <CardContainer style={{width:`${cardWidth}px`}}>
            <CardTop>
                <CardImage onClick={()=>handleModal(item.id)}  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />

                  <Modal  isOpen={isModalOpen} ariaHideApp={false} onRequestClose={()=>setIsModalOpen(false)} style={{zIndex:99999}}>
               
                    <ModalRow>
                        <ModalCol>
                      <Iframe id="cartoonVideo" src={`//www.youtube.com/embed/${videoKey}`} frameBorder="0" allowFullScreen></Iframe>
                        </ModalCol>
                        <ModalColRight  >
                            
                            <CardImageFull  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} />
                            <MovieDetails>
                                <MovieTitle>
                                    {item.original_title}  
                                    <CloseBtn title='fechar' onClick={()=>setIsModalOpen(false)}>x</CloseBtn>
                                </MovieTitle>
                                <MovieSubtitle>{item.title}</MovieSubtitle>
                                <MovieInfo>
                                    <Info> <Caption style={{color:"lime"}}>Estréia:</Caption> {item.release_date}</Info>
                                    <Caption>Generos: </Caption>
                                    {
                                        
                                        store.genres.filter(genre => item.genre_ids.includes(genre.id)).map((i, index) => <Info key={index}>{i.name}</Info>)
                                    }
                                    <Info> <Caption>Duração: </Caption> {itemExtended && itemExtended.runtime} min</Info>
                                </MovieInfo>

                                <MovieDesc>{item.overview}</MovieDesc>
                            </MovieDetails>
                        </ModalColRight>
                    </ModalRow>
                  </Modal>
            </CardTop>
        </CardContainer>
    )
}

const CloseBtn = styled.button`
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

const Caption= styled.span`
font-size: .9rem;
color: #fff;
font-weight: 600;
font-family: 'Barlow',sans-serif;
`

const Info = styled.div`
font-size: .9rem;
padding: 0 .25rem;
/* background-color: yellow; */
`

const MovieTitle = styled.div`
display: flex;
justify-content: space-between;
color: #fff;
font-family: 'Barlow', sans-serif;
font-weight: bold;
margin-bottom:0px;
padding-bottom:0px;
`
const MovieSubtitle = styled.h5`
padding: 0px;
`


const MovieInfo = styled.span`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`


const MovieDesc = styled.p`
font-size: .8rem;
`




const ModalRow= styled.div`
display: flex;
width: 100%;
height: 100%;



/* outline: 2px solid olive; */
`

const ModalCol = styled.div`
height: 100%;
/* outline: 1px solid red; */
max-width: 650px;
width:100%;
`
const ModalColRight=styled.div`
height: 100%;
/* outline: 1px solid red; */
max-width: 650px;
width:100%;
background-size: cover;
background-position: 0 0;
position: relative;

`



const Iframe = styled.iframe`
/* width: 560px;
height: 315px; */
width: 60%;
height: 70%;
min-width: 320px;
background-color: #111;

`






const CardContainer = styled.div`
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




const CardImage= styled.img`
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

const CardImageFull= styled.img`
width:100%;
/* display:block; */
height: 100%;
/* object-fit: contain; */
`



const MovieDetails = styled.div`
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







const CardTop= styled.div`
/* outline: 1px solid orange; */
/* padding-top: 50px; */

`

const CardTitle = styled.h3`
/* background-color:orange; */

`




export default Card
