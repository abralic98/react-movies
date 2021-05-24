import classes from "./MovieItem.module.css"
const IMAGES_API = "https://image.tmdb.org/t/p/w1280"
const MovieItem = ({title,poster_path,overview,vote_average}) =>{
    return(
        <div className={classes.movieBlock}>
            <div>
                <img src={IMAGES_API+poster_path} alt={title} />
            </div>
            <div className={classes.title_rating}>
                <p className={classes.title}>{title}</p>
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