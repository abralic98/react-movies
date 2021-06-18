
import PaginationButtonsMovie from "../PaginationButtonsMovie";
import PaginationButtonsSeries from "../PaginationButtonsSeries";
import { SearchContext } from "../../context/SearchContext"
import { useContext } from "react"

const Pagination = () =>{

    const {value7} = useContext(SearchContext)
    const [nav,setNav] = value7;
    return(
        <div>
            {nav===0 ? <PaginationButtonsMovie/> : null }
            {nav===1 ? <PaginationButtonsSeries/> : null}
            {nav===2 ? <PaginationButtonsMovie/> : null}
        </div>
    )
    
    
}

export default Pagination