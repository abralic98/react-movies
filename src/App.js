import { Switch , Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
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
          <Route path="/home">
              <HomePage/>
          </Route>
          <Route path="/tvshows">
              <TVshowsPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
