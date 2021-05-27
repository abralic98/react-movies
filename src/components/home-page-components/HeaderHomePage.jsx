import classes from "../home-page-components/HeaderHomePage.module.css"
import { useState , useRef ,useContext} from "react";
import {SearchContext} from "../../context/SearchContext"
import { useHistory } from "react-router-dom"

import logo from "../../images/balkanflix.png"
import icon from "../../images/usericon.png"
import searchIcon from "../../images/search.png"

import CategoriesDropDown from "./CategoriesDropDown"

const HeaderHomePage = () =>{
    const {value2,value3,value4,value5,value6,value7,value8} = useContext(SearchContext);
    const [searchValue,setSearchValue] = value2;
    const [refresh,setRefresh] = value3;
    const [moviePage,setMoviePage] = value4;

    const [tvShowPage,setTvShowPage] = value5;
    const [seriesPage,setSeriesPage] = value6;

    const [categories,setCategories] =value8;

    const [nav,setNav] = value7;

    const history=useHistory();

    
    const searchInputRef=useRef();
    
    function submitSearchHandler(e){
        e.preventDefault();
        const enteredSearch=searchInputRef.current.value;    
        setSearchValue(enteredSearch);
        console.log(searchValue)
    }

    function onChangeHandle(e){
        console.log(searchValue) 
    }

    function fetchNewest(){
        setRefresh(true)
        setNav(0);
        setMoviePage(1);
        console.log(refresh);
        history.replace("/home")
        
    }

    function tvShows(){
        setNav(1);
        setSeriesPage(true);
        setTvShowPage(1);
        setRefresh(false);
        history.replace("/tvshows")
    }

    function showCategories(){
        console.log(categories)
        setCategories(true);
    }
    function removeCategories(){
        setCategories(false)
    }

    
    return(
        <div className={classes.headerBar}>
            <img className={classes.logo} src={logo} alt="" />
            <li className={classes.headerList} onClick={fetchNewest}>Movies</li>
            <li onClick={tvShows}className={classes.headerList}>TV Shows</li>
            <div className={classes.categories}>
                <li onMouseEnter={showCategories} onMouseLeave={removeCategories} className={classes.headerList}>Categories</li>
                {categories ? <CategoriesDropDown/> : null}
            </div>
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