import classes from "./home-page-components/Pagination.module.css"
import {useContext} from "react";
import {SearchContext} from "../context/SearchContext"
const PaginationButtonsMovie = () =>{
    const {value4}=useContext(SearchContext);
    
    
    const [page,setPage] = value4;

    function submitNextPage() {
        setPage(page+1)
    }

    function submitPreviousPage(){
        if(page>1){
            setPage(page-1)
        }
        
    }
    return(
        <div className={classes.buttonBlock}>
            <button onClick={submitPreviousPage} className={`${classes.button} ${classes.previous}`}>Previous Page</button>
            <div className={classes.counterBlock}>
                <p>{page}</p>
            </div>
            <button onClick={submitNextPage} className={`${classes.button} ${classes.next}`}>Next Page</button>
        </div>
    )
}

export default PaginationButtonsMovie