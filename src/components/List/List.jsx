import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'

import {LeftArrow,RightArrow,ListContainer,ListRow,ListTitle,ListTrack} from './List.styles'




const List = ({title,items}) => {
const [scrollX,setScrollX]=React.useState(-800);


// whenever we resize the window recalculate the horizontal scroll
React.useEffect(()=>{
    const resetScroll=()=>{
        setScrollX(-800);
    }
    window.addEventListener('resize',()=>{
        resetScroll();
    });
})

// evita que a extremidade esquerda da parte movel saia da lateral esquerda para o meio da tela ao mover para direita
const manageScrollLeft=()=>{
    let x= scrollX + Math.round(window.innerWidth*.5); //each click moves half the size of the user screen
    if(x > 0){
      x=0;
    }
    setScrollX(x)
}

// console.log(items)

const managetScrollRight=()=>{
    let x= scrollX - Math.round(window.innerWidth * .5);
    let listW = items.length * 300;
    if((window.innerWidth-listW)> x){
        x= (window.innerWidth-listW) - 40;
    }
    setScrollX(x);  
}

    return (
        <ListContainer>
            <ListTitle>{title}</ListTitle>
            <ListRow>
                    {
                        <LeftArrow onClick={manageScrollLeft} />
                    }
                       {
                 <RightArrow onClick={managetScrollRight}/>

                }
                <ListTrack style={{marginLeft:`${scrollX}px`, width:`${ items.length *300}px`}}>
             {
                items.map( item => (
                    <Card item={item} key={item.id}>
                        <h5>{item.title}</h5>
                    </Card>
                ))
             }
             </ListTrack>
          
            </ListRow>
        </ListContainer>
    )
}


export default List
