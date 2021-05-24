import { useState, createContext , useEffect } from "react";


export const SearchContext = createContext();




export const MovieProvider = (props) =>{
    const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
    const [movies, setMovies] = useState([]);
    const [searchValue,setSearchValue] = useState();
    const [refresh,setRefresh] = useState(false);
    
    useEffect(() =>{
        fetch(SEARCH_API+searchValue).then(res => res.json()).then(data =>{
            setMovies(data.results);
        });

    },[searchValue])

    useEffect(() =>{
        fetch(FEATURED_API).then(res => res.json()).then(data =>{       
            setMovies(data.results);
            setRefresh(false);
        });

    },[refresh])

    

    return (
        <SearchContext.Provider value={{ value: [movies, setMovies], value2: [searchValue, setSearchValue] , value3:[refresh,setRefresh] }} >
            {props.children}
        </SearchContext.Provider>
    )
}
    

