import { useState, createContext , useEffect } from "react";

export const SearchContext = createContext();

export const MovieProvider = (props) =>{
    const FEATURED_MOVIES_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dfb7945576fbe047b252003d5e79eef7&page=1"
    const SEARCH_MOVIES_API = "https://api.themoviedb.org/3/search/movie?&api_key=dfb7945576fbe047b252003d5e79eef7&query="
    const HORROR_API= "https://api.themoviedb.org/3/discover/movie?api_key=dfb7945576fbe047b252003d5e79eef7&with_genres=27"
    const FEATURED_TV_SHOWS_API = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=dfb7945576fbe047b252003d5e79eef7&page=1"
    const SEARCH_TV_SHOWS= "https://api.themoviedb.org/3/search/tv?api_key=dfb7945576fbe047b252003d5e79eef7&query="
    
    const [nav,setNav] = useState(0); // home page  0=> tv shows 1=> ..

    const [movies, setMovies] = useState([]);
    const [searchValue,setSearchValue] = useState("");
    const [refresh,setRefresh] = useState(false);
    const [moviePage,setMoviePage] = useState(1);
    const [movieCategory,setMovieCategory] = useState(0); //0 default 1 action 2 horror 3 scifi 4 mystery 5 comedy 6 romantic

    const [searchValueSeries,setSearchValueSeries] = useState();
    const [seriesPage,setSeriesPage] = useState(false);
    const [tvShowPage,setTvShowPage] = useState(1);

    useEffect(() =>{
        if(nav===1)
        fetch(FEATURED_TV_SHOWS_API+"&page="+tvShowPage).then(res => res.json()).then(data =>{       
            setMovies(data.results);
            console.log("najnovije serije")
            console.log(nav);  
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
            fetch(HORROR_API).then(res => res.json()).then(data =>{       
                setMovies(data.results);
                console.log("horror")
            });
        }
    },[movieCategory])

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
            value10:[movieCategory,setMovieCategory]}} >
            {props.children}
        </SearchContext.Provider>
    )
}
    

