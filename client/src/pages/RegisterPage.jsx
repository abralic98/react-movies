import { useHistory } from "react-router-dom";
import classes from "../pages/RegisterPage.module.css";
import RegisterForm from "../components/RegisterForm";
import backgroundIMG from "../images/loginpicture.jpg";
import {useState} from "react";
import Axios from "axios";
const RegisterPage = () =>{
    const history = useHistory();
    const [duplicate,setDuplicate] = useState({duplicate1:false , value:""});
    
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
            Axios.get("http://116.203.242.253:3002/api/accounts")
            .then((response)=>{
                const isAccountRegistered = response.data.find((item)=>{
                    if(item.accountLoginName===registrationData.name){
                        setDuplicate((prev)=>{
                            return {
                                duplicate1:prev.duplicate1=true,
                                value:prev.value="Change Name"
                            }
                        })

                    }
                    if(item.accountEmail===registrationData.email){
                        setDuplicate((prev)=>{
                            return {
                                duplicate1:prev.duplicate1=true,
                                value:prev.value="Change Password"
                            }
                        })
                    }
                })
                if(isAccountRegistered===undefined){
                    sendRegistration();
                    Axios.post("http://116.203.242.253:3002/api/register", {
                        registerName: registrationData.name,
                        registerPassword: registrationData.password,
                        registerEmail: registrationData.email,
                    })
                    .then(
                        history.push("/login")
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
            {duplicate.duplicate1===true ? (duplicate.value==="Change Name" ? <p className={classes.duplicate}>Account name is allready taken</p> 
            : <p className={classes.duplicate}>Account Email is allready taken</p>) : null}
                <RegisterForm onRegister={RegistrationHandler}/>
            </div> 
        </div>
    )
}

export default RegisterPage;