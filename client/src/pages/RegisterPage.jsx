import { useHistory } from "react-router-dom"
import classes from "../pages/RegisterPage.module.css"
import RegisterForm from "../components/RegisterForm"
import backgroundIMG from "../images/loginpicture.jpg"
import Axios from "axios"
const RegisterPage = () =>{
    const history = useHistory();
    function RegistrationHandler(registrationData){
        function sendRegistration(){
            window.Email.send({
                Host : "smtp.gmail.com",
                Username : "balkanflix98@gmail.com",
                Password : "balkanflix123",
                To : registrationData.email,
                From : "balkanflix98@gmail.com",
                Subject : "BalkanFlix Team",
                Body : `Thank you for registring on BalkanFlix.com.`
            })}

        Axios.get("http://localhost:3001/api/accounts")
        .then((response)=>{
            const isAccountRegistered = response.data.find((item)=>{
                if(item.accountLoginName===registrationData.name && item.accountPassword===registrationData.password && item.accountEmail===registrationData.email){
                    return ((item.accountLoginName===registrationData.name && item.accountPassword===registrationData.password) && item.accountEmail===registrationData.email)
                }
                if(item.accountLoginName===registrationData.name){
                    return("changename")
                }
                if(item.accountEmail===registrationData.email){
                    return("changepassword")
                }
                
            })

            if(isAccountRegistered!==undefined){
                console.log("allready registered")
            }
            if(isAccountRegistered===undefined){
                sendRegistration()
                Axios.post("http://localhost:3001/api/register", {
                    registerName: registrationData.name,
                    registerPassword: registrationData.password,
                    registerEmail: registrationData.email
                })
                .then(
                    history.replace("/login")
                )
            }
        }) 
    }
    return(
        <div>
            <div className={classes.blackGradient}></div>
            <div className={classes.background}>
                <img src={backgroundIMG} alt="background-img" className={classes.backgroundIMG}/>
            </div>
            <div className={classes.blackBar}>
                <RegisterForm onRegister={RegistrationHandler}/>
            </div>
            
        </div>
    )
}

export default RegisterPage