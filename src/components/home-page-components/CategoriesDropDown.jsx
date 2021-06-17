import classes from "./CategoriesDropDown.module.css"
import { Link } from "react-router-dom"
import { SearchContext } from "../../context/SearchContext"
import { useContext } from "react"
const CategoriesDropDown = () =>{
    const {value7,value10,value4}= useContext(SearchContext)
    const [movieCategory,setMovieCategory] = value10;
    const [nav,setNav] = value7;
    const [moviesPage,setMoviesPage] = value4;
    

    function Horror(){
        setNav(2);
        setMoviesPage(1);
        setMovieCategory(2);
    }
    function Action(){
        setNav(2);
        setMoviesPage(1);
        setMovieCategory(1);  
    }
    function SciFi(){
        setNav(2);
        setMoviesPage(1);
        setMovieCategory(3);
    }
    function Mystery(){
        setNav(2);
        setMoviesPage(1);
        setMovieCategory(4)
    }
    function Comedy(){
        setNav(2);
        setMoviesPage(1);
        setMovieCategory(5);
    }
    function Romance(){
        setNav(2);
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