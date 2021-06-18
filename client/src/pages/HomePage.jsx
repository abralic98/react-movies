import backgroundIMG from "../images/loginpicture.jpg"
import classes from "./HomePage.module.css"
import logo from "../images/balkanflix.png"
import tmdb from "../images/tmdb.svg"
import pitch from "../video/pitch.mp4"
import mail from "../images/email-icon.png"


import { useHistory } from "react-router-dom"
const HomePage = ()=>{
    const history = useHistory()
    function getStarted(){
        history.replace("/register")
    }
    return (
        <div>
            <div className={classes.background}>
                <img src={backgroundIMG} alt="background-img" className={classes.backgroundIMG}/>
            </div>
            <div className={classes.blackGradient}></div>
            <div className={classes.logoBlock}><img src={logo} alt="" /></div>
            <div className={classes.content}>
                <div className={classes.titleBlock}>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p>Ready to explore ?</p>
                    <button onClick={getStarted}>Get Started &gt;</button>
                </div>
                <div className={classes.greyLine}></div>
                <div className={classes.tmdb}>
                    <h2>About this Application</h2>
                    <p>Personal non-commercial project developed in React Javascript, express, mysql and its using
                        The Movie Data Base (TMDB) API for fetching movie data.
                    </p>
                    <a href="https://www.themoviedb.org/"><img className={classes.logo} src={tmdb} alt="" /></a>
                </div>
                <div className={classes.greyLine}></div>
                <div className={classes.watch}>
                    <div>
                        <h2>Explore Movies and TV Shows</h2>
                        <p>Save your favorites easily and always have something to watch.</p>
                        <p>More things to come in future.</p>
                    </div>
                    <div className={classes.videoPlayer}>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
                        <video width="320px" height="240px" autoPlay loop muted>
                            <source src={pitch}></source>
                        </video>
                    </div>
                </div>
                <div className={classes.greyLine}></div>
                <div className={classes.contact}>
                    <h2>Contact</h2>
                    <p>Fell free to contact me if you have any ideas.</p>
                    <form action="">
                        <div className={classes.contactForm}>
                            <label htmlFor="">Your Name</label>
                            <input type="text" />
                        </div>
                        <div className={classes.contactForm}>
                            <label htmlFor="">Your Email</label>
                            <input type="email" />
                        </div>
                        <div className={classes.contactForm}>
                            <label htmlFor="">Subject</label>
                            <input type="text" />
                        </div>
                        <div className={classes.contactForm}>
                            <label htmlFor="">Your Message</label>
                            <textarea name="message"  cols="34" rows="10"></textarea>
                        </div>
                        <button>Send Message<img src={mail} alt="" /></button>
                    </form>
                </div>
                <div className={classes.greyLine}></div>
                <div className={classes.usefulLinks}>
                    <h2>Useful Links</h2>
                    <div className={classes.usefulImages}>
                        <a href="https://github.com/abralic98"><i className="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/ante-bralic-bb6bb320b/"><i className="fa fa-linkedin"></i></a>
                        <a href="https://wa.me/+385955183303/?text=Hello I Checked your portfolio and I would like to speak with you"><i class="fa fa-whatsapp"></i></a>   
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default HomePage