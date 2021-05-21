import HeaderHomePage from "../components/home-page-components/HeaderHomePage"
import MovieItemList from "../components/home-page-components/MovieItemList"
import classes from "../pages/HomePage.module.css"

const HomePage = () =>{
    
    
    
    return(
        <div className={classes.body}>
            <HeaderHomePage/>
            <MovieItemList/>
            
        </div>
    )
}

export default HomePage