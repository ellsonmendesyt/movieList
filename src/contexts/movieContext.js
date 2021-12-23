import React, { createContext, useState } from "react"

export const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  let movieStore={movies,setMovies}

  return (
    <MoviesContext.Provider value={movieStore}>
      {children}
    </MoviesContext.Provider>
  );
};