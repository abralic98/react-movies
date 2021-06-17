import classes from "../home-page-components/HeaderHomePage.module.css"
import { useState , useRef ,useContext} from "react";
import {SearchContext} from "../../context/SearchContext"
import {LoginContext} from "../../context/LoginContext"
import { useHistory } from "react-router-dom"

import logo from "../../images/balkanflix.png"
import icon from "../../images/usericon.png"
import searchIcon from "../../images/search.png"
import CategoriesDropDown from "./CategoriesDropDown"

const HeaderHomePage = () =>{
    const {value2,value4,value5,value7,value8,value9,value10} = useContext(SearchContext);
    const [searchValue,setSearchValue] = value2;
    const [moviePage,setMoviePage] = value4;
    const [tvShowPage,setTvShowPage] = value5;
    const [searchValueSeries,setSearchValueSeries] = value9;
    const [movieCategory,setMovieCategory] = value10;
    const [categories,setCategories] =value8;
    const [nav,setNav] = value7;

    const {accountContext} = useContext(LoginContext);
    const [account,setAccount] = accountContext
    const history=useHistory();

    
    const searchInputRef=useRef();
    
    function submitSearchHandler(e){
        e.preventDefault();
        const enteredSearch=searchInputRef.current.value;
        if(nav===0 || nav===2){
            setSearchValue(enteredSearch);
        }
        if(nav===1){
            setSearchValueSeries(enteredSearch);
        }
        
        console.log(searchValue)
    }

    function onChangeHandle(e){
        console.log(searchValue) 
    }

    function fetchNewest(){
        setNav(0);
        setMovieCategory(0);
        setMoviePage(1);
        history.replace("/movies")
        
    }

    function tvShows(){
        setNav(1);
        setTvShowPage(1);
        history.replace("/tvshows")
    }

    function showCategories(){
        setCategories(true);
    }
    function removeCategories(){
        setCategories(false)
    }

    function profilePage(){
        setNav(4);
        history.replace("/profile")
    }
    
    return(
        <div className={classes.headerBar}>
            <img className={classes.logo} src={logo} alt="" />
            <li className={classes.headerList} onClick={fetchNewest}>Movies</li>
            <li onClick={tvShows}className={classes.headerList}>TV Shows</li>
            <div onMouseLeave={removeCategories} className={classes.categories}>
                <li onClick={showCategories}  className={classes.headerList}>Categories</li>
                {categories ? <CategoriesDropDown/> : null}
            </div>
            <li className={classes.headerList}>My Favorites</li>
            <div className={classes.searchDiv}>
                <form className={classes.headerList} onSubmit={submitSearchHandler} action="">
                    <input onChange={onChangeHandle} type="search" ref={searchInputRef}/>
                </form>
                <img onClick={submitSearchHandler}className={classes.searchIcon}src={searchIcon} alt="" />
            </div>
            
            <img onClick={profilePage} className={classes.userIcon} src={account.accountAvatar===null || account.accountAvatar==="" ? icon : account.accountAvatar} alt="" />
        </div>
    )
} 

export default HeaderHomePage;