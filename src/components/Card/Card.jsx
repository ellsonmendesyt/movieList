import React from 'react'
import styled from 'styled-components'

import { cardWidth } from '../../constants'

const Card = ({item}) => {
    return (
        <CardContainer style={{width:`${cardWidth}px`}}>
            <CardTop>
                <CardImage src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
             {/* <CardTitle>{item.title}</CardTitle> */}
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

cursor: pointer;

`

const CardImage= styled.img`
width: 300px;
 display: block;
 height: 100%;
 height: 430px;
 transform: scale(0.9);

 transition: all .4s ;

 &:hover{
     transform: scale(0.98);
     box-shadow:5px 8px 26px -3px rgba(0,0,0,0.82);
 }

`

const CardTop= styled.div`


`

const CardTitle = styled.h3`
background-color:orange;

`


export default Card
