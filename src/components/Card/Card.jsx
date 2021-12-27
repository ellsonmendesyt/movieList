import React from 'react'
import styled from 'styled-components'

import { cardWidth } from '../../constants'

import Modal from 'react-modal'
import axios from 'axios'

import {MoviesContext} from '../../contexts/movieContext'


import{Caption,
    CardContainer,
    CardImage,
    CardImageFull,
    CloseBtn,
    Iframe,
    Info,
    ModalCol,
    ModalColRight,
    ModalRow,
    MovieDesc,
    MovieDetails,
    MovieInfo,
    MovieSubtitle,
    MovieTitle
} from './Card.styles'





const Card = ({item}) => {


const {REACT_APP_API_BASE_URL,REACT_APP_API_KEY} = process.env;
const store=React.useContext(MoviesContext)


 const [isModalOpen, setIsModalOpen]=React.useState(false);
 const [videoId,setVideoId]=React.useState(0);
const [videoKey,setVideoKey]=React.useState('');
const [itemExtended,setItemExtended]=React.useState(null);



 const handleModal=async(id)=>{
    const res =await axios.get(`${REACT_APP_API_BASE_URL}/movie/${id}/videos?api_key=${REACT_APP_API_KEY}&language=pt-BR`)
    const itemMoreInfo= await axios.get(`${REACT_APP_API_BASE_URL}/movie/${id}?api_key=${REACT_APP_API_KEY}&language=pt-BR`)
   // console.log(res.data.results[0].key)
   setVideoKey(res.data.results[0].key);
   setItemExtended(itemMoreInfo.data)
   setIsModalOpen(true);
   setVideoId(); 
}



    return (
        <CardContainer style={{width:`${cardWidth}px`}}>
            
                <CardImage onClick={()=>handleModal(item.id)}  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />

                  <Modal  isOpen={isModalOpen} ariaHideApp={false} onRequestClose={()=>setIsModalOpen(false)} style={{zIndex:99999}}>
               
                    <ModalRow>
                        <ModalCol>
                      <Iframe  src={`//www.youtube.com/embed/${videoKey}`} frameBorder="0" allowFullScreen></Iframe>
                        </ModalCol>
                        <ModalColRight  >
                            
                            <CardImageFull seamless  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} />
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
           
        </CardContainer>
    )
}



export default Card
