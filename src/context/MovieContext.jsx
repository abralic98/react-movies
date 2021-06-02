import { useState, createContext , useEffect } from "react";
export const MovieContext = createContext();
export const SelectedMovieProvider = (props) =>{     
    const [selectedMovie,setSelectedMovie] = useState([]);

    return (
        <MovieContext.Provider value={{ 
            value2: [selectedMovie,setSelectedMovie],
            }} >
            {props.children}
        </MovieContext.Provider>
    )
}
    

