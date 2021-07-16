import { useState, createContext , useEffect } from "react";
export const MovieContext = createContext();
export const SelectedMovieProvider = (props) =>{     
    const [selectedMovie,setSelectedMovie] = useState({});
    const [selectedTvShow,setSelectedTvShow] = useState([]);
    const [br,setBr] = useState(0);

    return (
        <MovieContext.Provider value={{ 
            value2: [selectedMovie,setSelectedMovie],
            value3: [selectedTvShow,setSelectedTvShow],
            broj:[br,setBr]
            }} >
            {props.children}
        </MovieContext.Provider>
    )
}
    

