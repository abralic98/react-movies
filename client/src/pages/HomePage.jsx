import backgroundIMG from "../images/loginpicture.jpg";
import classes from "./HomePage.module.css";
import logo from "../images/balkanflix.png";
import tmdb from "../images/tmdb.svg";
import pitch from "../video/pitch.mp4";
import mail from "../images/email-icon.png";
import {useRef} from "react";
import { useHistory } from "react-router-dom";
const HomePage = ()=>{
    const history = useHistory()
    function getStarted(){
        history.replace("/register");
    }
    
    const nameInputRef = useRef();
    const mailInputRef = useRef();
    const subjectInputRef = useRef();
    const messageInputRef = useRef();
    
function sendMailCustomer(e){
    e.preventDefault();
    const name = nameInputRef.current.value;
    const email = mailInputRef.current.value;
    sendMailToMe();
    window.Email.send({
        Host : "smtp.gmail.com",
        Username : "balkanflix98@gmail.com",
        Password : "balkanflix123",
        To : email,
        From : "balkanflix98@gmail.com",
        Subject : "no-reply",
        Body : `Thank you for contacting me ${name}. I recieved your message and I will respond as soon as possible`
    })
    .then(
        nameInputRef.current.value="",
        mailInputRef.current.value="",
        subjectInputRef.current.value="",
        messageInputRef.current.value=""
    )
}
function sendMailToMe(){
    const name = nameInputRef.current.value;
    const email = mailInputRef.current.value;
    const subject = subjectInputRef.current.value;
    const message = messageInputRef.current.value;

    window.Email.send({
        Host : "smtp.gmail.com",
        Username : "balkanflix98@gmail.com",
        Password : "balkanflix123",
        To : "ante.bralic2@gmail.com",
        From : "balkanflix98@gmail.com",
        Subject : "You have new message from ",
        Body : `Some ${name} wants to contact you from ${email} and his subject is ${subject} and message ${message}`
    })
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
                    <form onSubmit={sendMailCustomer} action="" >
                        <div className={classes.contactForm}>
                            <label htmlFor="">Your Name</label>
                            <input ref={nameInputRef} type="text" />
                        </div>
                        <div className={classes.contactForm}>
                            <label htmlFor="">Your Email</label>
                            <input ref={mailInputRef} type="email" />
                        </div>
                        <div className={classes.contactForm}>
                            <label htmlFor="">Subject</label>
                            <input ref={subjectInputRef}type="text" />
                        </div>
                        <div className={classes.contactForm}>
                            <label htmlFor="">Your Message</label>
                            <textarea ref={messageInputRef} name="message"  cols="34" rows="10"></textarea>
                        </div>
                        <button onClick={sendMailCustomer}>Send Message<img src={mail} alt="" /></button>
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