import { useContext,useEffect ,useState, useRef } from "react";
import { MovieContext } from "../../context/MovieContext";
import classes from "../selected-movie-components/MovieInfo.module.css";
import slidearrow from "../../images/slidearrow.png";
import { LoginContext } from "../../context/LoginContext";
import Axios from "axios";

const SeriesInfo = () =>{
    const IMAGES_API = "https://image.tmdb.org/t/p/w1280";
    const {value3} = useContext(MovieContext);
    const {navigation1,accountFavoriteList1,accountContext} = useContext(LoginContext);
    const [selectedTvShow,setSelectedTvShow] = value3;
    const [images,setImages] = useState ([]);
    const [trailer,setTrailer] = useState();
    const [navigation,setNavigation] = navigation1;
    const [accountFavoriteList,setAccountFavoriteList] = accountFavoriteList1;
    const account = JSON.parse(localStorage.getItem("account"));
    const [isFavorited, setIsFavorited] = useState(false);
    let arrayOfImages = [];
    const VIDEO_API= `https://api.themoviedb.org/3/tv/${selectedTvShow.id}/videos?api_key=dfb7945576fbe047b252003d5e79eef7&language=en-US`;
    const MOREIMAGES_API=`https://api.themoviedb.org/3/tv/${selectedTvShow.id}/images?api_key=dfb7945576fbe047b252003d5e79eef7&page&language=en-US&include_image_language=en,null`;
    useEffect(() =>{
        fetch(MOREIMAGES_API).then(res => res.json()).then(data =>{   
            for(let i=0; i<data.backdrops.length; i++){
                arrayOfImages.push(data.backdrops[i].file_path)  
            }
            setImages(arrayOfImages);
        });

    },[]);
    useEffect(() =>{
        fetch(VIDEO_API).then(res => res.json()).then(data =>{    
            if(data.results.length>0){
                setTrailer(data.results[0].key);
            } 
        });
    },[]);

    useEffect(()=>{
        Axios.get(`http://116.203.242.253:3002/api/get/account/favorite`, {
            params:{
                ID:account.ID,
                movieID:selectedTvShow.id
            }
        })
        .then((response)=>{
            if(response.data!=""){
                setIsFavorited(true);
            }
            console.log(response.data)
        })
    },[])
    const [imageNumber,setImageNumber] = useState(0);
    const [animate,setAnimate] = useState(false);
    const [direction,setDirection] = useState()
    const testing= useRef();
    let sum=0;

    function changeBackground(number){
        setAnimate(true);
        setTimeout(animateRefresh,100,number);
    }
    function animateRefresh(number){
        setImageNumber(number);
        setAnimate(false);
    }
    function leftArrow(){
        if(sum===0){
            sum=0;
        }else{
            sum=sum-18;
        }
        testing.current.style.transform=`translate(${-sum}vw)`;
        if(sum<18){
            sum=18;
        }
    }
    function rightArrow(){
        sum=sum+18;
        testing.current.style.transform=`translate(${-sum}vw)`;
        if(sum>72){
            sum=72;
        }
    }
    function addFavoriteHandler(){ 
        Axios.post("http://116.203.242.253:3002/api/post/account/favorites",
        { 
            movieID:selectedTvShow.id,
            accountID:account.ID
        })
        setIsFavorited(true);
    }
    function removeFavoriteHandler(){ 
        Axios.delete("http://116.203.242.253:3002/api/delete/account/favorites",
        { 
            params:{
                movieID:selectedTvShow.id,
                accountID:account.ID
            }
        })
        setIsFavorited(false);
    }
    function WindowSize(){
        const [size,setSize] = useState([window.innerWidth,window.innerHeight]);
        return size;
    }
    const [width,height] = WindowSize();
    return(
        <div>
            {width>=1000 ?
            <div className={classes.container}>
                <img className={animate===false ? classes.backgroundAnimate : classes.background} src={IMAGES_API+images[imageNumber]} alt="" />
                <div className={classes.infoBlock}>
                    <h1 className={classes.title}>{selectedTvShow.name}</h1>
                    <p className={classes.vote}>{selectedTvShow.vote_average} / 10 {<span>&#9733;</span>}</p>
                    <p className={classes.description}>{selectedTvShow.overview}</p>
                </div>
            
                <div className={classes.slider}>
                    <img onClick={leftArrow} className={classes.arrow} src={slidearrow} alt="" />
                    <div className={classes.imageBlock}>
                        <div ref={testing} className={classes.crno}>
                            <div onClick={() => changeBackground(0)}className={`${imageNumber===0 ? classes.transition : classes.slides} ${direction===0 ? classes.test : classes.test2}`}>
                                <img src={IMAGES_API+images[0]} alt="" />
                            </div>
                            <div onClick={() => changeBackground(1)} className={imageNumber===1 ? classes.transition : classes.slides}>
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
                        </div>             
                    </div>
                    <img onClick={rightArrow} className={classes.arrow} src={slidearrow} alt="" />
                </div>
                <div className={classes.trailerFlexBox}>
                    {<div className={classes.yt}>
                        <iframe width="700" height="400" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>}
                    {isFavorited!==true ? <div onClick={addFavoriteHandler}className={classes.btnFavorites}>Add to Favorites</div> :
                    <div onClick={removeFavoriteHandler}className={classes.btnFavorites} style={{backgroundColor:"red"}}>Remove from Favorites</div>}
                </div>
                
            </div> : null}

            {width<1000 ?
            <div className={classes.containerMobile}>
                <img className={animate===false ? classes.backgroundAnimate : classes.background} src={IMAGES_API+images[imageNumber]} alt="" />
                <div className={classes.infoBlock}>
                    <h1 className={classes.title}>{selectedTvShow.name}</h1>
                    <p className={classes.vote}>{selectedTvShow.vote_average} / 10 {<span>&#9733;</span>}</p>
                    <p className={classes.description}>{selectedTvShow.overview}</p>
                    <div className={classes.trailerFlexBox}>
                        {<div className={classes.ytMobile}>
                            <iframe width="500" height="300" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>}
                        {isFavorited!==true ? <div onClick={addFavoriteHandler}className={classes.btnFavorites}>Add to Favorites</div>:
                        <div onClick={removeFavoriteHandler}className={classes.btnFavorites} style={{backgroundColor:"red"}}>Remove Favorites</div>}
                    </div>
                    {width>900 && width<1000 ? 
                    <div className={classes.slider}>
                        <img onClick={leftArrow} className={classes.arrow} src={slidearrow} alt="" />
                        <div className={classes.imageBlock}>
                            <div ref={testing} className={classes.crno}>
                                <div onClick={() => changeBackground(0)}className={`${imageNumber===0 ? classes.transition : classes.slides} ${direction===0 ? classes.test : classes.test2}`}>
                                    <img src={IMAGES_API+images[0]} alt="" />
                                </div>
                                <div onClick={() => changeBackground(1)} className={imageNumber===1 ? classes.transition : classes.slides}>
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
                            </div>             
                        </div>
                            <img onClick={rightArrow} className={classes.arrow} src={slidearrow} alt="" />
                        </div> :

                        <div className={classes.mobileImageBlock}>
                                <div onClick={() => changeBackground(0)}className={classes.mobileImages}>
                                    <img src={IMAGES_API+images[0]} alt="" />
                                </div>
                                <div onClick={() => changeBackground(1)} className={classes.mobileImages}>
                                    <img src={IMAGES_API+images[1]} alt="" />
                                </div>
                                <div onClick={() => changeBackground(2)} className={classes.mobileImages}>
                                    <img src={IMAGES_API+images[2]} alt="" />
                                </div>
                                <div onClick={() => changeBackground(3)} className={classes.mobileImages}>
                                    <img src={IMAGES_API+images[3]} alt="" />
                                </div>
                                <div onClick={() => changeBackground(4)} className={classes.mobileImages}>
                                    <img src={IMAGES_API+images[4]} alt="" />
                                </div>
                                <div onClick={() => changeBackground(5)} className={classes.mobileImages}>
                                    <img src={IMAGES_API+images[5]} alt="" />
                                </div>
                                <div onClick={() => changeBackground(6)} className={classes.mobileImages}>
                                    <img src={IMAGES_API+images[6]} alt="" />
                                </div>
                                <div onClick={() => changeBackground(7)} className={classes.mobileImages}>
                                    <img src={IMAGES_API+images[7]} alt="" />
                                </div>
                                <div onClick={() => changeBackground(8)} className={classes.mobileImages}>
                                    <img src={IMAGES_API+images[8]} alt="" />
                                </div>
                                <div onClick={() => changeBackground(9)} className={classes.mobileImages}>
                                    <img src={IMAGES_API+images[9]} alt="" />
                                </div>
                        </div>}                        
                </div>         
            </div> : null}
        </div>
    )
}


export default SeriesInfo;