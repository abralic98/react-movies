import { Switch , Route } from "react-router-dom"
import MoviesPage from "./pages/MoviesPage"
import './App.css';
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import TVshowsPage from "./pages/TVshowsPage"
import { useContext } from "react"
import { SearchContext } from "./context/SearchContext"
import MovieInfo from "./components/selected-movie-components/MovieInfo";
import MovieTrailer from "./components/selected-movie-components/MovieTrailer";
import HeaderHomePage from "./components/home-page-components/HeaderHomePage";
import {MovieProvider} from "./context/SearchContext"


function App() {
 
  return (
    <div className="App">
        <Switch>
          <Route exact path="/login">
              <LoginPage/>
          </Route>
          <Route exact path="/register">
              <RegisterPage/>
          </Route>
          <Route exact path="/movies">
              <MoviesPage/>
          </Route>
          <Route exact path="/tvshows">
              <TVshowsPage/>
          </Route>
          <Route exact path="/movies/action">
              <MoviesPage/>
          </Route>
          <Route exact path="/movies/horror">
              <MoviesPage/>
          </Route>
          <Route exact path="/movies/scifi">
              <MoviesPage/>
          </Route>
          <Route exact path="/movies/mystery">
              <MoviesPage/>
          </Route>
          <Route exact path="/movies/comedy">
              <MoviesPage/>
          </Route>
          <Route exact path="/movies/romance">
              <MoviesPage/>
          </Route>
          <Route path="/movies/movie">
              <MovieProvider>
                {/*<HeaderHomePage/> ne radi popravi */}
                <MovieInfo/>
                <MovieTrailer/>
              </MovieProvider>
              
          </Route>
        </Switch>
    </div>
  );
}

export default App;
