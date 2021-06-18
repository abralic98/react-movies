import MovieItem from "./MovieItem"
import classes from "./MovieItemList.module.css"
import { useContext } from "react"

import {SearchContext} from "../../context/SearchContext"



const MovieItemList = (props) =>{
    const {value} = useContext(SearchContext);
    const [movies,setMovies] = value;
    
    movies.splice(18,2)
    return(  
        <div className={classes.list}>
 
            {movies.map(movie => (
                <MovieItem key={movie.id} {...movie}/>
            ))}
        </div>
    )
    
}

export default MovieItemList;