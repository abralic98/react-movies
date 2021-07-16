import { Switch , Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import './App.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TVshowsPage from "./pages/TVshowsPage";
import HomePage from "./pages/HomePage";
import SelectedMoviePage from "./pages/SelectedMoviePage";
import SelectedSeriesPage from "./pages/SelectedSeriesPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";

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
          <Route exact path="/movies/movie">    
              <SelectedMoviePage/>    
          </Route>
          <Route exact path="/tvshows/tvshow">    
              <SelectedSeriesPage/>    
          </Route>
          <Route path="/profile">
              <ProfilePage/>
          </Route>
          <Route path="/home">
              <HomePage/>
          </Route>
          <Route path="/favorites">
              <FavoritesPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
