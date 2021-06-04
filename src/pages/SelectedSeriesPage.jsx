
import HeaderHomePage from "../components/home-page-components/HeaderHomePage"
import SeriesInfo from "../components/selected-movie-components/SeriesInfo"
import { MovieProvider } from "../context/SearchContext"
import classes from "./SelectedMoviePage.module.css"
const SelectedMoviePage = () =>{
    return (
        <div className={classes.body}>
            <MovieProvider>
                <HeaderHomePage/>
                <SeriesInfo/>         
            </MovieProvider>
            
        </div>
    )
}

export default SelectedMoviePage