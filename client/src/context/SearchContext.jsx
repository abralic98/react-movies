import { useState, createContext , useEffect ,useContext} from "react";
import { LoginContext } from "./LoginContext";
import Axios from "axios";
export const SearchContext = createContext();

export const MovieProvider = (props) =>{
    const FEATURED_MOVIES_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dfb7945576fbe047b252003d5e79eef7&page=1"
    const SEARCH_MOVIES_API = "https://api.themoviedb.org/3/search/movie?&api_key=dfb7945576fbe047b252003d5e79eef7&query="
    const FEATURED_TV_SHOWS_API = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=dfb7945576fbe047b252003d5e79eef7&page=1"
    const SEARCH_TV_SHOWS= "https://api.themoviedb.org/3/search/tv?api_key=dfb7945576fbe047b252003d5e79eef7&query="

    const HORROR_API= "https://api.themoviedb.org/3/discover/movie?api_key=dfb7945576fbe047b252003d5e79eef7&with_genres=27"
    const ACTION_API= "https://api.themoviedb.org/3/discover/movie?api_key=dfb7945576fbe047b252003d5e79eef7&with_genres=28"
    const COMEDY_API= "https://api.themoviedb.org/3/discover/movie?api_key=dfb7945576fbe047b252003d5e79eef7&with_genres=35"
    const MYSTERY_API= "https://api.themoviedb.org/3/discover/movie?api_key=dfb7945576fbe047b252003d5e79eef7&with_genres=9648"
    const ROMANCE_API= "https://api.themoviedb.org/3/discover/movie?api_key=dfb7945576fbe047b252003d5e79eef7&with_genres=10749"
    const SCIFI_API= "https://api.themoviedb.org/3/discover/movie?api_key=dfb7945576fbe047b252003d5e79eef7&with_genres=878"

    //const TEST= "https://api.themoviedb.org/3/genre/movie/list?api_key=dfb7945576fbe047b252003d5e79eef7&language=en-US" for getting category ids
    
    const {navigation1,value10,accountFavoriteList1,accountContext} = useContext(LoginContext);
    const [navigation,setNavigation] = navigation1; //home page  0=> tv shows 1=> ..
    const [movies, setMovies] = useState([]);
    const [searchValue,setSearchValue] = useState("");
    const [moviePage,setMoviePage] = useState(1);
    const [movieCategory,setMovieCategory] = value10;
    const [selectedMovie,setSelectedMovie] = useState({});
    const [searchValueSeries,setSearchValueSeries] = useState();
    const [tvShowPage,setTvShowPage] = useState(1);
    const [accountFavoriteList,setAccountFavoriteList] = accountFavoriteList1
    const [account,setAccount] = accountContext;


    useEffect(() =>{
        if(navigation===1 && searchValueSeries===undefined)
        fetch(FEATURED_TV_SHOWS_API+"&page="+tvShowPage).then(res => res.json()).then(data =>{       
            console.log("najnovije serije")
            console.log(navigation);
            setMovies(data.results)
        });

    },[tvShowPage,navigation])

    useEffect(() =>{
        if((navigation===0 || navigation===2) && searchValue!==""){
            fetch(SEARCH_MOVIES_API+searchValue).then(res => res.json()).then(data =>{
                console.log("movies search")
                setMovies(data.results);
            });
        }
    },[searchValue])

    useEffect(() =>{
        if(navigation===2 && movieCategory===2){
            fetch(HORROR_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("horror")
            });
        }
        if(navigation===2 && movieCategory===1){
            fetch(ACTION_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("action")
            });
        }
        if(navigation===2 && movieCategory===3){
            fetch(SCIFI_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("scifi")
            });
        }
        if(navigation===2 && movieCategory===4){
            fetch(MYSTERY_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("mystery")
            });
        }
        if(navigation===2 && movieCategory===5){
            fetch(COMEDY_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("comedy")
            });
        }
        if(navigation===2 && movieCategory===6){
            fetch(ROMANCE_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("romance")
            });
        }
    },[movieCategory,moviePage])

    useEffect(() =>{
        if(navigation===1 && searchValueSeries!==undefined){
            console.log(searchValueSeries,"HD")
            fetch(SEARCH_TV_SHOWS+searchValueSeries).then(res => res.json()).then(data =>{      
                console.log("serije search")
                setMovies(data.results);       
            });
        }
    },[searchValueSeries])

    useEffect(() =>{
        if(navigation===3){ // popravit treba ne radi
            Axios.get("http://localhost:3001/api/get/account/favorites")
            .then(
                (response)=>{
                    const findAccount = response.data.find((item)=>{
                        return (item.accountLoginName===account.accountLoginName)
                    })
                    if(findAccount.accountFavorites!==undefined || findAccount.accountFavorites!==null){
                        console.log(JSON.parse(findAccount.accountFavorites))
                        setMovies(JSON.parse(findAccount.accountFavorites))
                    }
                    
                }
            )
        }     
    },[navigation])
    useEffect(() =>{
        if(navigation===0){
            fetch(FEATURED_MOVIES_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("filmovi")
                console.log(navigation)
            });
        }
        

    },[moviePage,navigation])

    const[categories,setCategories] = useState(false);

    

    return (
        <SearchContext.Provider value={{ 
            value: [movies, setMovies], 
            value2: [searchValue, setSearchValue] ,  
            value4:[moviePage,setMoviePage],
            value5:[tvShowPage,setTvShowPage],
            value8:[categories,setCategories],
            value9:[searchValueSeries,setSearchValueSeries],
            value11:[selectedMovie,setSelectedMovie]}} >
            {props.children}
        </SearchContext.Provider>
    )
}
    

