import axios from "axios";
import React, { createContext, useState } from "react"

// share our list to the whole application
export const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [genres,setGenres]=useState(null);

  let movieStore={movies,setMovies,genres}

  React.useEffect(()=>{
    async function getGenres(){
      const res =await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=3b88845e949fdf7b792077a7a905048d`);
      setGenres(res.data.genres);
    }
     getGenres();
  },[])

  return (
    <MoviesContext.Provider value={movieStore}>
      {children}
    </MoviesContext.Provider>
  );
};