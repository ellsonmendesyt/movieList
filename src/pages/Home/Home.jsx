import React from 'react'
import styled from 'styled-components'
import { MoviesContext } from '../../contexts/movieContext'

import List from '../../components/List';

const Home = () => {

    const store= React.useContext(MoviesContext)
    return (
        <HomeContainer >
         {
            // store.movies.length>0 && console.log(store.movies[0].title)
            // mostrar filme em cartaz
            // {/* <List title={store.movies[0].title} items={store.movies[0].items.results} /> */}
            store.movies.length>0 && store.movies.map((list,idx) =>(
                <List key={idx} title={list.title} items={list.items.results} />
            ))
            
         }


        </HomeContainer>
    )
}

const HomeContainer = styled.section`

height: 100%;
padding-top: 3rem;
`


export default Home
