import {MovieProvider} from "../context/SearchContext"
import classes from "../pages/HomePage.module.css"
import HeaderHomePage from "../components/home-page-components/HeaderHomePage"
import MovieItemList from "../components/home-page-components/MovieItemList"
import Pagination from "../components/home-page-components/Pagination"

const FavoritesPage = () =>{
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

export default FavoritesPage