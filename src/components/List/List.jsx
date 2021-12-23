import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";



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
            <h3>{title}</h3>
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


const LeftArrow = styled(IoIosArrowBack)`

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

const RightArrow = styled(IoIosArrowForward)`
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







const ListContainer = styled.div`
max-width: 100%;
`


const ListTrack = styled.div`
outline: 1px solid orange;
width: 9999999px;
transition: all .4s;

`

const ListRow = styled.div`

overflow-x: hidden;
position: relative;
`

export default List
