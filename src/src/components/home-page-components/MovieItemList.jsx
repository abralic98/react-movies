import MovieItem from "./MovieItem"
import classes from "./MovieItemList.module.css"
import { useEffect, useState } from "react"

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const MovieItemList = (props) =>{
    const [movies, setMovies] = useState([]);
    
    useEffect(() =>{
        fetch(FEATURED_API).then(res => res.json()).then(data =>{
            console.log(data.results);
            setMovies(data.results);
        });

    },[])
    
    
    return(
        <div className={classes.list}>
            {movies.map(movie => (
                
                <MovieItem key={movie.id} {...movie}/>
            ))}
        </div>
    )
    
}

export default MovieItemList;