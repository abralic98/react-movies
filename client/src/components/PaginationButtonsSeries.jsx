import classes from "./home-page-components/Pagination.module.css";
import {useContext} from "react";
import {SearchContext} from "../context/SearchContext"
const PaginationButtonsSeries = () =>{
    const {value5}=useContext(SearchContext);
    const [tvShowPage,setTvShowPage] = value5;

    function submitNextPage() {
        setTvShowPage(tvShowPage+1);
    }
    function submitPreviousPage(){
        if(tvShowPage>1){
            setTvShowPage(tvShowPage-1);
        }     
    }
    return(
        <div className={classes.buttonBlock}>
            <button onClick={submitPreviousPage} className={`${classes.button} ${classes.previous}`}>Previous Page</button>
            <div className={classes.counterBlock}>
                <p>{tvShowPage}</p>
            </div>
            <button onClick={submitNextPage} className={`${classes.button} ${classes.next}`}>Next Page</button>
        </div>
    )
}

export default PaginationButtonsSeries;