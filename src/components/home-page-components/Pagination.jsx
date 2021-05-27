
import PaginationButtonsMovie from "../PaginationButtonsMovie";
import PaginationButtonsSeries from "../PaginationButtonsSeries";
import { SearchContext } from "../../context/SearchContext"
import { useContext } from "react"

const Pagination = () =>{

    const {value7} = useContext(SearchContext)
    const [nav,setNav] = value7;
    console.log(nav)
    return(
        <div>
            {nav===0 ? <PaginationButtonsMovie/> : null }
            {nav===1 ? <PaginationButtonsSeries/> : null}
        </div>
    )
    
    
}

export default Pagination