import classes from "./CategoriesDropDown.module.css"
import { Link } from "react-router-dom"
import { SearchContext } from "../../context/SearchContext"
import { useContext } from "react"
const CategoriesDropDown = () =>{
    const {value7,value10}= useContext(SearchContext)
    const [movieCategory,setMovieCategory] = value10;
    const [nav,setNav] = value7;

    function Horror(){
        setMovieCategory(2)
        setNav(2);
    }
    return(
        <div className={classes.category}>
            <div className={classes.dropDown}>
                <li className={classes.list}>Action</li>
                <Link to="/movies/horror" onClick={Horror}className={classes.list}>Horror</Link>
                <li className={classes.list}>Sci-fi</li>
                <li className={classes.list}>Mystery</li>
                <li className={classes.list}>Comedy</li>
                <li className={classes.list}>Romantic</li>
            </div>
        </div>
        
    )
}

export default CategoriesDropDown