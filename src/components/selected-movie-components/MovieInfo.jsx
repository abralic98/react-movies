
import { useContext,useEffect ,useState } from "react"
import { MovieContext } from "../../context/MovieContext"
import classes from "../selected-movie-components/MovieInfo.module.css"
import slidearrow from "../../images/slidearrow.png"

const MovieInfo = () =>{
    const IMAGES_API = "https://image.tmdb.org/t/p/w1280"
    
    const {value2} = useContext(MovieContext);
    const [selectedMovie,setSelectedMovie] = value2;
    const [images,setImages] = useState ([])
    let arrayOfImages = [];
    const MOREIMAGES_API=`https://api.themoviedb.org/3/movie/${selectedMovie.id}/images?api_key=dfb7945576fbe047b252003d5e79eef7&page&language=en-US&include_image_language=en,null`
    useEffect(() =>{
        fetch(MOREIMAGES_API).then(res => res.json()).then(data =>{    
              
            for(let i=0; i<data.backdrops.length; i++){
                arrayOfImages.push(data.backdrops[i].file_path)  
            }
            setImages(arrayOfImages)
        });

    },[])

    const [imageNumber,setImageNumber] = useState(0);
    const [animate,setAnimate] = useState(false)
    const [direction,setDirection] = useState()

    function changeBackground(number){
        setAnimate(true)
        setTimeout(animateRefresh,100,number)
    }
    function animateRefresh(number){
        setImageNumber(number)
        setAnimate(false)
    }
    function leftArrow(){
        setDirection(0)
        console.log(direction)
    }
    function rightArrow(){
        setDirection(1)
        console.log(direction)
    }
    return(
        <div className={classes.container}>
            <img onClick={leftArrow} className={animate===false ? classes.backgroundAnimate : classes.background} src={IMAGES_API+images[imageNumber]} alt="" />
            <div className={classes.infoBlock}>
                <h1 className={classes.title}>{selectedMovie.title}</h1>
                <p className={classes.vote}>{selectedMovie.vote_average} / 10 {<span>&#9733;</span>}</p>
                <p className={classes.description}>{selectedMovie.overview}</p>
            </div>
            <div className={classes.slider}>
                <img className={classes.arrow} src={slidearrow} alt="" />
                <div className={classes.imageBlock}>
                    <div onClick={() => changeBackground(1)}className={`${imageNumber===1 ? classes.transition : classes.slides} ${direction===0 ? classes.test : classes.test2}`}>
                        <img src={IMAGES_API+images[1]} alt="" />
                    </div>
                    <div onClick={() => changeBackground(2)} className={imageNumber===2 ? classes.transition : classes.slides}>
                        <img src={IMAGES_API+images[2]} alt="" />
                    </div>
                    <div onClick={() => changeBackground(3)} className={imageNumber===3 ? classes.transition : classes.slides}>
                        <img src={IMAGES_API+images[3]} alt="" />
                    </div>
                    <div onClick={() => changeBackground(4)} className={imageNumber===4 ? classes.transition : classes.slides}>
                        <img src={IMAGES_API+images[4]} alt="" />
                    </div>
                    <div onClick={() => changeBackground(5)} className={imageNumber===5 ? classes.transition : classes.slides}>
                        <img src={IMAGES_API+images[5]} alt="" />
                    </div>
                    <div onClick={() => changeBackground(6)} className={imageNumber===6 ? classes.transition : classes.slides}>
                        <img src={IMAGES_API+images[6]} alt="" />
                    </div>
                    <div onClick={() => changeBackground(7)} className={imageNumber===7 ? classes.transition : classes.slides}>
                        <img src={IMAGES_API+images[7]} alt="" />
                    </div>
                    <div onClick={() => changeBackground(8)} className={imageNumber===8 ? classes.transition : classes.slides}>
                        <img src={IMAGES_API+images[8]} alt="" />
                    </div>
                    <div onClick={() => changeBackground(9)} className={imageNumber===9 ? classes.transition : classes.slides}>
                        <img src={IMAGES_API+images[9]} alt="" />
                    </div>
                    <div onClick={() => changeBackground(10)} className={imageNumber===10 ? classes.transition : classes.slides}>
                        <img src={IMAGES_API+images[10]} alt="" />
                    </div>
                </div>
                <img onClick={rightArrow} className={classes.arrow} src={slidearrow} alt="" />
            </div>
            
        </div>
        
    )
}

export default MovieInfo;