import classes from "./MovieItem.module.css"
import { SearchContext } from "../../context/SearchContext"
import { useContext } from "react";
const IMAGES_API = "https://image.tmdb.org/t/p/w1280"
const MovieItem = ({title,poster_path,overview,vote_average,name}) =>{

    const {value7} = useContext(SearchContext);

    const [nav,setNav] = value7;
    return(
        <div className={classes.movieBlock}>
            <div>
                <img src={IMAGES_API+poster_path} alt={title} />
            </div>
            <div className={classes.title_rating}>
                <p className={classes.title}>{nav===0 ? title : name }</p>
                <p className={classes.rating}>{vote_average}{<span>&#9733;</span>}</p>
            </div>

            <div className={classes.overview}>
                <p>Overview:</p>
                <p>{overview}</p>
            </div>
            
        </div>
    )
}

export default MovieItem;