import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { SelectedMovieProvider } from "./context/MovieContext";
import { LoginProvider } from "./context/LoginContext";

ReactDOM.render(
    <BrowserRouter>
      <SelectedMovieProvider>
        <LoginProvider>
            <App/> 
        </LoginProvider>
      </SelectedMovieProvider>
    </BrowserRouter>,
  document.getElementById('root')
);


