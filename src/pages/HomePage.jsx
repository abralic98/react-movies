import HeaderHomePage from "../components/home-page-components/HeaderHomePage"
import MovieItemList from "../components/home-page-components/MovieItemList"
import classes from "../pages/HomePage.module.css"
import {MovieProvider} from "../context/SearchContext"





const HomePage = () =>{

    return(
        <div className={classes.body}>
            <MovieProvider>
                <HeaderHomePage/>
                <MovieItemList/>
            </MovieProvider>           
        </div>
    )
}

export default HomePage