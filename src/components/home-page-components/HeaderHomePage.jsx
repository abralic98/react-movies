import classes from "../home-page-components/HeaderHomePage.module.css"

import logo from "../../images/balkanflix.png"
import icon from "../../images/usericon.png"
const HeaderHomePage = () =>{
    return(
        <div className={classes.headerBar}>
            <img className={classes.logo} src={logo} alt="" />
            <li className={classes.headerList}>Home</li>
            <li className={classes.headerList}>TV Shows</li>
            <li className={classes.headerList}>Movies</li>
            <li className={classes.headerList}>Recently Added</li>
            <li className={classes.headerList}>My Favorites</li>
            <img className={classes.userIcon}src={icon} alt="" />
        </div>
    )
} 

export default HeaderHomePage;