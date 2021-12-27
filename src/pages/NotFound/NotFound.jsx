import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
    return (
        <NotFoundContainer>
           <CryingNotFound>
               <img width={300} src="./notfound.gif" alt="sorry not found" />
           <h5>Página não encontrada</h5>
           </CryingNotFound>

        </NotFoundContainer>
    )
}

const CryingNotFound  = styled.div`

`

const NotFoundContainer = styled.div`
min-height: 90vh;
background-color: #0A9DD8;
color: #fff;
text-align: center;
display: flex;
justify-content: center;
align-items: center;


& h5{
    font-family: "Barlow",sans-serif;

    color: #fff;
    font-size: 1.5rem;
    text-align:center;
}
`


export default NotFound
