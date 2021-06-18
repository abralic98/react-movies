import HeaderHomePage from "../components/home-page-components/HeaderHomePage"
import MovieItemList from "../components/home-page-components/MovieItemList"
import classes from "../pages/HomePage.module.css"
import {MovieProvider} from "../context/SearchContext"
import Pagination from "../components/home-page-components/Pagination"

const MoviesPage = () =>{

    return(
        <div className={classes.body}>
            <MovieProvider>
                <HeaderHomePage/>
                <MovieItemList/>
                <Pagination/>
            </MovieProvider>           
        </div>
    )
}

export default MoviesPage;