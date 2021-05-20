
import classes from "../pages/LoginPage.module.css"
import LoginForm from "../components/LoginForm"
import backgroundIMG from "../images/loginpicture.jpg"

const LoginPage = () =>{
    return(
        <div>
            <img src={backgroundIMG} alt="background-img" className={classes.backgroundIMG}/>
            <div className={classes.background}>
                <LoginForm/>
            </div>  
        </div>
    )
}

export default LoginPage;