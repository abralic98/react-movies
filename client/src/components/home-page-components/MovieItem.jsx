import classes from "./MovieItem.module.css";
import { useContext ,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import { LoginContext } from "../../context/LoginContext";
const IMAGES_API = "https://image.tmdb.org/t/p/w1280";
const MovieItem = (props) =>{
    
    const {value2,value3} = useContext(MovieContext);
    const [selectedMovie,setSelectedMovie] = value2;
    const [selectedTvShow,setSelectedTvShow] = value3;
    const history =useHistory();
    const {navigation1} = useContext (LoginContext);
    const [navigation,setNavigation] = navigation1;
    
    function selectMovie(){
        
        setSelectedMovie((prev)=> { 
            return {
                title:prev.title=props.title,
                poster_path:prev.poster_path=props.poster_path,
                overview:prev.overview=props.overview,
                vote_average:prev.vote_average=props.vote_average,
                name:prev.name=props.name,
                backdrop_path:prev.backdrop_path=props.backdrop_path,
                id:prev.id=props.id
            }
        })
        history.push("/movies/movie");
    }
    function selectTvShow(){
        setSelectedTvShow((prev)=> {
            return {
                title:prev.title=props.title,
                poster_path:prev.poster_path=props.poster_path,
                overview:prev.overview=props.overview,
                vote_average:prev.vote_average=props.vote_average,
                name:prev.name=props.name,
                backdrop_path:prev.backdrop_path=props.backdrop_path,
                id:prev.id=props.id
            }
        })
        history.push("/tvshows/tvshow");
    }
 
    return(
        <div onClick={navigation===0 || navigation===2 || navigation===3 ? (props.title===undefined ? selectTvShow : selectMovie) : selectTvShow}className={classes.movieBlock}>
            <div>
                <img src={IMAGES_API+props.poster_path} alt={props.title} />
            </div>
            <div className={classes.title_rating}>
                <p className={classes.title}>{navigation===0 || navigation===2 || navigation===3 ? (props.title===undefined ? props.name : props.title) : props.name }</p>
                <p className={classes.rating}>{props.vote_average}{<span>&#9733;</span>}</p>
            </div>
            <div className={classes.overview}>
                <p>Overview:</p>
                <p>{props.overview}</p>
            </div>
            
        </div>
    )
}

export default MovieItem;