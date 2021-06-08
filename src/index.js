import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { SelectedMovieProvider } from "./context/MovieContext"
import { LoginContextProvider } from "./context/LoginContext"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <SelectedMovieProvider>
      <LoginContextProvider>
        <App/> 
      </LoginContextProvider>
    </SelectedMovieProvider>
           
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


