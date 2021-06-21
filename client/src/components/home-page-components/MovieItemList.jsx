import MovieItem from "./MovieItem"
import classes from "./MovieItemList.module.css"
import { useContext } from "react"
import {SearchContext} from "../../context/SearchContext"
import { LoginContext } from "../../context/LoginContext"

const MovieItemList = (props) =>{
    const {value} = useContext(SearchContext);
    const [movies,setMovies] = value;
    const {navigation1, accountFavoriteList1} = useContext(LoginContext)
    const [navigation,setNavigation] = navigation1
    const [accountFavoriteList,setAccountFavoriteList] = accountFavoriteList1
    if(navigation!==3){
        movies.splice(18,2)
    }
    console.log(movies)
    
    return(  
        <div className={classes.list}>
            {movies.map(movie => (
                <MovieItem key={movie.id} {...movie}/>
            ))}
        </div>
    )
    
}

export default MovieItemList;