import { useState, createContext , useEffect } from "react";
export const MovieContext = createContext();
export const SelectedMovieProvider = (props) =>{     
    const [selectedMovie,setSelectedMovie] = useState([]);
    const [selectedTvShow,setSelectedTvShow] = useState([]);

    return (
        <MovieContext.Provider value={{ 
            value2: [selectedMovie,setSelectedMovie],
            value3: [selectedTvShow,setSelectedTvShow],
            }} >
            {props.children}
        </MovieContext.Provider>
    )
}
    

