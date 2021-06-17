import backgroundIMG from "../images/loginpicture.jpg"
import classes from "./HomePage.module.css"
import logo from "../images/balkanflix.png"
const HomePage = ()=>{
    return (
        <div>
            <div className={classes.background}>
                <img src={backgroundIMG} alt="background-img" className={classes.backgroundIMG}/>
            </div>
            <div className={classes.blackGradient}></div>
            <div className={classes.logoBlock}><img src={logo} alt="" /></div>
            <div className={classes.content}>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <p>Ready to watch?</p>
            </div>

        </div>
    )
}

export default HomePage