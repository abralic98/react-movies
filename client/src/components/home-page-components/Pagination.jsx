
import PaginationButtonsMovie from "../PaginationButtonsMovie";
import PaginationButtonsSeries from "../PaginationButtonsSeries";
import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";

const Pagination = () =>{

    const {navigation1} = useContext(LoginContext);
    const [navigation,setNavigation] = navigation1;
    return(
        <div>
            {navigation===0 ? <PaginationButtonsMovie/> : null }
            {navigation===1 ? <PaginationButtonsSeries/> : null}
            {navigation===2 ? <PaginationButtonsMovie/> : null}
        </div>
    )
    
    
}

export default Pagination;