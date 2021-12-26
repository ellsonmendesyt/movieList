import React,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import {useContext} from 'react'
import Home from './pages/Home/Home';
import Tmdb from './api'
import { MoviesProvider, MoviesContext } from './contexts/movieContext';
import Modal from 'react-modal';



Modal.setAppElement('#root')

function App() {

const [movieList,setMovieList]=useState([]);
const store=useContext(MoviesContext)

  useEffect(() => {
    const loadAll = async ()=>{
       let list= await Tmdb.getHomeList();

      //fill the store movie list
      store.setMovies(list);  

   }
  
   loadAll();
}, [])

// console.log(store);
  // store.movies.length >0 && console.log(store.movies)

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
