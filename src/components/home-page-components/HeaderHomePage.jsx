import classes from "../home-page-components/HeaderHomePage.module.css"
import searchIcon from "../../images/search.png"
import { useState , useRef ,useContext} from "react";
import {SearchContext} from "../../context/SearchContext"

import logo from "../../images/balkanflix.png"
import icon from "../../images/usericon.png"

const HeaderHomePage = () =>{
    const {value,value2,value3} = useContext(SearchContext);
    const [searchValue,setSearchValue] = value2;
    const [refresh,setRefresh] = value3;
    
    const searchInputRef=useRef();
    
    function submitSearchHandler(e){
        e.preventDefault();
        const enteredSearch=searchInputRef.current.value
        setSearchValue(enteredSearch);
        console.log(searchValue)
    }

    function onChangeHandle(e){
        const enteredSearch=searchInputRef.current.value
        
        console.log("searchxd", searchValue)
        
    }

    function fetchNewest(){
        setRefresh(true)
    }

    
    return(
        <div className={classes.headerBar}>
            <img className={classes.logo} src={logo} alt="" />
            <li className={classes.headerList} onClick={fetchNewest}>Home</li>
            <li className={classes.headerList}>TV Shows</li>
            <li className={classes.headerList}>Movies</li>
            <li className={classes.headerList}>My Favorites</li>
            <div className={classes.searchDiv}>
                <form className={classes.headerList} onSubmit={submitSearchHandler} action="">
                    <input onChange={onChangeHandle} type="search" ref={searchInputRef}/>
                </form>
                <img onClick={submitSearchHandler}className={classes.searchIcon}src={searchIcon} alt="" />
            </div>
            
            <img className={classes.userIcon}src={icon} alt="" />
        </div>
    )
} 

export default HeaderHomePage;