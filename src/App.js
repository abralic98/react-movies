import { Switch , Route } from "react-router-dom"
import MoviesPage from "./pages/MoviesPage"
import './App.css';
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import TVshowsPage from "./pages/TVshowsPage"


function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/login">
              <LoginPage/>
          </Route>
          <Route path="/register">
              <RegisterPage/>
          </Route>
          <Route path="/movies">
              <MoviesPage/>
          </Route>
          <Route path="/tvshows">
              <TVshowsPage/>
          </Route>
          <Route path="movies/horror">
              <MoviesPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
