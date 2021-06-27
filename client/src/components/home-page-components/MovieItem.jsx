import classes from "./MovieItem.module.css"
import { useContext ,useEffect } from "react";
import { useHistory } from "react-router-dom"
import { MovieContext } from "../../context/MovieContext";
import { LoginContext } from "../../context/LoginContext";
const IMAGES_API = "https://image.tmdb.org/t/p/w1280"
const MovieItem = ({title,poster_path,overview,vote_average,name,backdrop_path,id}) =>{
    
    const {value2,value3} = useContext(MovieContext)
    const [selectedMovie,setSelectedMovie] = value2;
    const [selectedTvShow,setSelectedTvShow] = value3;
    const history =useHistory();
    const {navigation1} = useContext (LoginContext);
    const [navigation,setNavigation] = navigation1
    
    function selectMovie(){
        setSelectedMovie((prev)=> {
            return {
                title:prev.title=title,
                poster_path:prev.poster_path=poster_path,
                overview:prev.overview=overview,
                vote_average:prev.vote_average=vote_average,
                name:prev.name=name,
                backdrop_path:prev.backdrop_path=backdrop_path,
                id:prev.id=id
            }
        })
        history.replace("/movies/movie")
    }
    function selectTvShow(){
        setSelectedTvShow((prev)=> {
            return {
                title:prev.title=title,
                poster_path:prev.poster_path=poster_path,
                overview:prev.overview=overview,
                vote_average:prev.vote_average=vote_average,
                name:prev.name=name,
                backdrop_path:prev.backdrop_path=backdrop_path,
                id:prev.id=id
            }
        })
        history.replace("/tvshows/tvshow")
    }
 
    return(
        <div onClick={navigation===0 || navigation===2 || navigation===3 ? selectMovie : selectTvShow}className={classes.movieBlock}>
            <div>
                <img src={IMAGES_API+poster_path} alt={title} />
            </div>
            <div className={classes.title_rating}>
                <p className={classes.title}>{navigation===0 || navigation===2 || navigation===3 ? title : name }</p>
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