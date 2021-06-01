import { useState, createContext , useEffect } from "react";

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
    
    const [nav,setNav] = useState(0); // home page  0=> tv shows 1=> ..

    const [movies, setMovies] = useState([]);
    const [searchValue,setSearchValue] = useState("");
    const [refresh,setRefresh] = useState(false);
    const [moviePage,setMoviePage] = useState(1);
    const [movieCategory,setMovieCategory] = useState(0); //0 default 1 action 2 horror 3 scifi 4 mystery 5 comedy 6 romantic

    const [selectedMovie,setSelectedMovie] = useState([]);

    const [searchValueSeries,setSearchValueSeries] = useState();
    const [seriesPage,setSeriesPage] = useState(false);
    const [tvShowPage,setTvShowPage] = useState(1);
    
    useEffect(() =>{
        if(nav===1)
        fetch(FEATURED_TV_SHOWS_API+"&page="+tvShowPage).then(res => res.json()).then(data =>{       
            
            console.log("najnovije serije")
            console.log(nav);
            setMovies(data.results)
        });

    },[tvShowPage,seriesPage])

    useEffect(() =>{
        if(nav===0 && searchValue!==""){
            fetch(SEARCH_MOVIES_API+searchValue).then(res => res.json()).then(data =>{
                console.log("movies search")
                setMovies(data.results);
            });
        }
    },[searchValue])

    useEffect(() =>{
        if(nav===2 && movieCategory===2){
            fetch(HORROR_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("horror")
            });
        }
        if(nav===2 && movieCategory===1){
            fetch(ACTION_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("action")
            });
        }
        if(nav===2 && movieCategory===3){
            fetch(SCIFI_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("scifi")
            });
        }
        if(nav===2 && movieCategory===4){
            fetch(MYSTERY_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("mystery")
            });
        }
        if(nav===2 && movieCategory===5){
            fetch(COMEDY_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("comedy")
            });
        }
        if(nav===2 && movieCategory===6){
            fetch(ROMANCE_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("romance")
            });
        }
    },[movieCategory,moviePage])

    useEffect(() =>{
        if(nav===1 && searchValueSeries!==""){
            fetch(SEARCH_TV_SHOWS+searchValueSeries).then(res => res.json()).then(data =>{      
                console.log("serije search")
                setMovies(data.results);       
            });
        }
        

    },[searchValueSeries])
    

    
    useEffect(() =>{
        if(nav===0){
            fetch(FEATURED_MOVIES_API+"&page="+moviePage).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                setRefresh(false);
                console.log("filmovi")
                console.log(nav)
            });
        }
        

    },[refresh,moviePage])

    const[categories,setCategories] = useState(false);

    

    return (
        <SearchContext.Provider value={{ 
            value: [movies, setMovies], 
            value2: [searchValue, setSearchValue] , 
            value3:[refresh,setRefresh] , 
            value4:[moviePage,setMoviePage],
            value5:[tvShowPage,setTvShowPage],
            value6:[seriesPage,setSeriesPage],
            value7:[nav,setNav],
            value8:[categories,setCategories],
            value9:[searchValueSeries,setSearchValueSeries],
            value10:[movieCategory,setMovieCategory],
            value11:[selectedMovie,setSelectedMovie]}} >
            {props.children}
        </SearchContext.Provider>
    )
}
    

