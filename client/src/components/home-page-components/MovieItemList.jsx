import MovieItem from "./MovieItem";
import classes from "./MovieItemList.module.css";
import { useContext, useState} from "react";
import {SearchContext} from "../../context/SearchContext";
import { LoginContext } from "../../context/LoginContext";

const MovieItemList = (props) =>{
    const {value} = useContext(SearchContext);
    const [movies,setMovies] = value;
    const {navigation1, accountFavoriteList1} = useContext(LoginContext);
    const [navigation,setNavigation] = navigation1;
    const [accountFavoriteList,setAccountFavoriteList] = accountFavoriteList1;
    function WindowSize(){
        const [size,setSize] = useState([window.innerWidth,window.innerHeight]);
        return size;
    }
    const [width,height] = WindowSize();
    if(movies!==null ){
        if(width>=1300){
            movies.splice(18,2);
        }
        if(width>=700 && width<1000){
            movies.splice(18,2);
        }
    }

    
    return(  
        <div className={classes.list}>
            {movies!==null ? movies.map(movie => (
                <MovieItem key={movie.id} {...movie}/>
            )) : console.log("kek")}
        </div>
    )
    
}

export default MovieItemList;