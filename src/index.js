import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { MoviesProvider } from './contexts/movieContext';
import {BrowserRouter as Router} from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
        <Router>
    
        <App />
          

        </Router>

    </MoviesProvider>
    

    
  </React.StrictMode>,
  document.getElementById('root')
);


