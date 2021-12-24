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

React.useEffect(()=>{

 
   
    // const fetchData = async (endpoint)=>{
    //     const response= await axios.get(`${BASE_URL}${endpoint}`)
    //      const {data}=response;
    //      return data;
    //  }
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
},[isModalOpen])


 const handleModal=async(id)=>{
    // https://www.youtube.com/watch?v=INLzqh7rZ-U

    const res =await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`)

    // console.log(res.data.results[0].key)
    setVideoKey(res.data.results[0].key);
     setIsModalOpen(true);
    //  setVideoId();
    

 }

    return (
        <CardContainer style={{width:`${cardWidth}px`}}>
            <CardTop>
                <CardImage onClick={()=>handleModal(item.id)}  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />

                  <Modal isOpen={isModalOpen} ariaHideApp={false}>
                    <h1>Modal 1</h1>
                      <p>{videoId}</p>
                      <iframe id="cartoonVideo" width="560" height="315" src={`//www.youtube.com/embed/${videoKey}`} frameBorder="0" allowFullScreen></iframe>
                    <button onClick={()=>setIsModalOpen(false)}>x</button>
                  </Modal>
            </CardTop>
        </CardContainer>
    )
}

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








const CardTop= styled.div`
/* outline: 1px solid orange; */

`

const CardTitle = styled.h3`
background-color:orange;

`




export default Card
