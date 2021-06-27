import classes from "./CategoriesDropDown.module.css"
import { Link } from "react-router-dom"
import { SearchContext } from "../../context/SearchContext"
import { useContext, useRef } from "react"
import { LoginContext } from "../../context/LoginContext"
import logo from "../../images/balkanflix.png"
const CategoriesDropDown = () =>{
    const {value4, value8}= useContext(SearchContext)
    const {navigation1,value10,mobile} = useContext(LoginContext)
    const [navigation,setNavigation] = navigation1
    const [movieCategory,setMovieCategory] = value10;
    const [moviesPage,setMoviesPage] = value4;
    const [isMobile,setIsmobile] = mobile;
    const [categories,setCategories] = value8
    
    const rightBarCategoriesRef = useRef();
    function Horror(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(2);
        setCategories(false)
    }
    function Action(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(1);
        setCategories(false)
    }
    function SciFi(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(3);
        setCategories(false)
    }
    function Mystery(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(4)
        setCategories(false)
    }
    function Comedy(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(5);
        setCategories(false)
    }
    function Romance(){
        setNavigation(2)
        setMoviesPage(1);
        setMovieCategory(6);
        setCategories(false)
    }
    console.log(isMobile)
    return(
        <div className={classes.category}>
            {isMobile===false ? 
            <div className={classes.dropDown}>
                <Link to="/movies/action" onClick={Action} className={classes.list}>Action</Link>
                <Link to="/movies/horror" onClick={Horror}className={classes.list}>Horror</Link>
                <Link to="/movies/scifi" onClick={SciFi} className={classes.list}>Sci-fi</Link>
                <Link to="/movies/mystery" onClick={Mystery} className={classes.list}>Mystery</Link>
                <Link to="/movies/comedy" onClick={Comedy} className={classes.list}>Comedy</Link>
                <Link to="/movies/romance" onClick={Romance} className={classes.list}>Romantic</Link>
            </div> : 
            <div ref={rightBarCategoriesRef} className={classes.headerBarMobileCategories}>
                <h2>Categories</h2>
                <Link to="/movies/action" onClick={Action} className={classes.list}>Action</Link>
                <Link to="/movies/horror" onClick={Horror}className={classes.list}>Horror</Link>
                <Link to="/movies/scifi" onClick={SciFi} className={classes.list}>Sci-fi</Link>
                <Link to="/movies/mystery" onClick={Mystery} className={classes.list}>Mystery</Link>
                <Link to="/movies/comedy" onClick={Comedy} className={classes.list}>Comedy</Link>
                <Link to="/movies/romance" onClick={Romance} className={classes.list}>Romantic</Link>   
            </div>}
            
        </div>
        
    )
}

export default CategoriesDropDown