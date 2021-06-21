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
    const {value2,value4,value5,value8,value9} = useContext(SearchContext);
    const [searchValue,setSearchValue] = value2;
    const [moviePage,setMoviePage] = value4;
    const [tvShowPage,setTvShowPage] = value5;
    const [searchValueSeries,setSearchValueSeries] = value9;
    const [categories,setCategories] =value8;

    const {accountContext,navigation1,value10} = useContext(LoginContext);
    const [account,setAccount] = accountContext
    const history=useHistory();
    const [navigation,setNavigation] = navigation1
    const [movieCategory,setMovieCategory] = value10;
    
    const searchInputRef=useRef();
    
    function submitSearchHandler(e){
        e.preventDefault();
        const enteredSearch=searchInputRef.current.value;
        if(navigation===0 || navigation===2){
            setSearchValue(enteredSearch);
        }
        if(navigation===1){
            setSearchValueSeries(enteredSearch);
        }
        
    }

    function fetchNewest(){
        setNavigation(0)
        setMovieCategory(0);
        setMoviePage(1);
        history.replace("/movies")
        
    }

    function tvShows(){
        setNavigation(1);
        setTvShowPage(1);
        history.replace("/tvshows")
    }

    function showCategories(){
        setCategories(true);
    }
    function removeCategories(){
        setCategories(false)
    }
    
    function showFavorites(){
        setNavigation(3)
        history.replace("/favorites")
    }

    function profilePage(){
        setNavigation(4);
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
            <li onClick={showFavorites}className={classes.headerList}>My Favorites</li>
            <div className={classes.searchDiv}>
                <form className={classes.headerList} onSubmit={submitSearchHandler} action="">
                    <input type="search" ref={searchInputRef}/>
                </form>
                <img onClick={submitSearchHandler}className={classes.searchIcon}src={searchIcon} alt="" />
            </div>
            
            <img onClick={profilePage} className={classes.userIcon} src={account.accountAvatar===null || account.accountAvatar==="" ? icon : account.accountAvatar} alt="" />
        </div>
    )
} 

export default HeaderHomePage;