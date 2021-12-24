import React from 'react'
import styled from 'styled-components'

import { cardWidth } from '../../constants'

import Modal from 'react-modal'
import axios from 'axios'




const Card = ({item}) => {


    const API_KEY='3b88845e949fdf7b792077a7a905048d';
    const BASE_URL='https://api.themoviedb.org/3';


 const [isModalOpen, setIsModalOpen]=React.useState(false);
 const [videoId,setVideoId]=React.useState(0);
const [videoKey,setVideoKey]=React.useState('');

// React.useEffect(()=>{

 
   
//     // const fetchData = async (endpoint)=>{
//     //     const response= await axios.get(`${BASE_URL}${endpoint}`)
//     //      const {data}=response;
//     //      return data;
//     //  }
//     // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// },[isModalOpen])


 const handleModal=async(id)=>{
    // https://www.youtube.com/watch?v=INLzqh7rZ-U

    const res =await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`)

    // console.log(res.data.results[0].key)
    setVideoKey(res.data.results[0].key);
    console.log(item)
     setIsModalOpen(true);
    //  setVideoId();
    

 }

    return (
        <CardContainer style={{width:`${cardWidth}px`}}>
            <CardTop>
                <CardImage onClick={()=>handleModal(item.id)}  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />

                  <Modal  isOpen={isModalOpen} ariaHideApp={false} onRequestClose={()=>setIsModalOpen(false)}>
                    <ModalActions>
                    <h1>Modal 1</h1>
                    <button onClick={()=>setIsModalOpen(false)}>x</button>
                    </ModalActions>
                    <ModalRow>
                        <ModalCol>
                      <Iframe id="cartoonVideo" src={`//www.youtube.com/embed/${videoKey}`} frameBorder="0" allowFullScreen></Iframe>
                        </ModalCol>
                        <ModalColRight  >
                            
                            <CardImageFull  src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} />
                            <MovieDetails>
                                Details
                            </MovieDetails>
                        </ModalColRight>
                    </ModalRow>
                  </Modal>
            </CardTop>
        </CardContainer>
    )
}

const ModalActions = styled.div`
background-color: rgba(0,0,0,0.03);
 display: flex;
 justify-content: space-between;
 padding:.3rem 2rem ;

`
const ModalRow= styled.div`
display: flex;
width: 100%;
height: 100%;
outline: 2px solid olive;
`

const ModalCol = styled.div`
height: 100%;
outline: 1px solid red;
max-width: 650px;
width:100%;
`
const ModalColRight=styled.div`
height: 100%;
outline: 1px solid red;
max-width: 650px;
width:100%;
background-size: cover;
background-position: 0 0;
position: relative;
 /* background-color: magenta; */
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
display:block;
height: 100%;
object-fit: cover;
`



const MovieDetails = styled.div`
position: absolute;
top:0px;
left: 0px;
bottom: 0;
right: 0;
background-color: rgba(0,0,0,0.1);

`







const CardTop= styled.div`
/* outline: 1px solid orange; */

`

const CardTitle = styled.h3`
background-color:orange;

`




export default Card
