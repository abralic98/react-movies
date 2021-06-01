
import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"
const MovieInfo = () =>{
    const {value11} = useContext(SearchContext);
    const [selectedMovie,setSelectedMovie]= value11;
    return(
        <div>
            {console.log("kurac"+selectedMovie)}
        </div>
    )
}

export default MovieInfo;