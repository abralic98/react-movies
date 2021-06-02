import HeaderHomePage from "../components/home-page-components/HeaderHomePage"
import MovieInfo from "../components/selected-movie-components/MovieInfo"
import MovieTrailer from "../components/selected-movie-components/MovieTrailer"
import { MovieProvider } from "../context/SearchContext"
import classes from "./SelectedMoviePage.module.css"

const SelectedMoviePage = () =>{
    
    return (
        <div className={classes.body}>
            <MovieProvider>
                <HeaderHomePage/>
                <MovieInfo/>
                <MovieTrailer/>
            </MovieProvider>
            
        </div>
    )
}

export default SelectedMoviePage