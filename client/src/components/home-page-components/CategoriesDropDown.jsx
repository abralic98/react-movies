import classes from "./CategoriesDropDown.module.css"
import { Link } from "react-router-dom"
import { SearchContext } from "../../context/SearchContext"
import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
const CategoriesDropDown = () =>{
    const {value4}= useContext(SearchContext)
    const {navigation1,value10} = useContext(LoginContext)
    const [navigation,setNavigation] = navigation1
    const [movieCategory,setMovieCategory] = value10;
    const [moviesPage,setMoviesPage] = value4;
    

    function Horror(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(2);
    }
    function Action(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(1);  
    }
    function SciFi(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(3);
    }
    function Mystery(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(4)
    }
    function Comedy(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(5);
    }
    function Romance(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(6);
    }
    return(
        <div className={classes.category}>
            <div className={classes.dropDown}>
                <Link to="/movies/action" onClick={Action} className={classes.list}>Action</Link>
                <Link to="/movies/horror" onClick={Horror}className={classes.list}>Horror</Link>
                <Link to="/movies/scifi" onClick={SciFi} className={classes.list}>Sci-fi</Link>
                <Link to="/movies/mystery" onClick={Mystery} className={classes.list}>Mystery</Link>
                <Link to="/movies/comedy" onClick={Comedy} className={classes.list}>Comedy</Link>
                <Link to="/movies/romance" onClick={Romance} className={classes.list}>Romantic</Link>
            </div>
        </div>
        
    )
}

export default CategoriesDropDown