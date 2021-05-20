import { useHistory } from "react-router-dom"
import classes from "../pages/RegisterPage.module.css"
import RegisterForm from "../components/RegisterForm"
import backgroundIMG from "../images/loginpicture.jpg"
const RegisterPage = () =>{
    const history = useHistory();
    function RegistrationHandler(registrationData){
        fetch(
            "https://react-movies-d3075-default-rtdb.firebaseio.com/accounts",
            {
                method: "POST",
                body: JSON.stringify(registrationData)
            }
        )
        .then(() => {
            history.replace("/login")
        });
    }
    return(
        <div>
            <img src={backgroundIMG} alt="background-img" className={classes.backgroundIMG}/>
            <div className={classes.background}>
                <RegisterForm onRegister={RegistrationHandler}/>
            </div>
            
        </div>
    )
}

export default RegisterPage