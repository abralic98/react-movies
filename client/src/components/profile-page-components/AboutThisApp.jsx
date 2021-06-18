
import classes from "./AboutThisApp.module.css"
import tmdb from "../../images/tmdb.svg"


const AboutThisApp = () =>{

    return(
        <div className={classes.body}>
            <h2>About this Application</h2>
            <p>Personal non-commercial project where you can look for movies and tv shows,
               read description, watch trailers and add them to your favorite list. <br />
               More functionality will be added over time
            </p>
            <p>This project is developed in React Javascript and its using 
               The Movie Data Base (TMDB) API for fetching data </p>
            <a href="https://www.themoviedb.org/"><img className={classes.logo} src={tmdb} alt="" /></a>

        </div>
    )
}

export default AboutThisApp;