import { useHistory } from "react-router-dom"
import classes from "../pages/LoginPage.module.css"
import LoginForm from "../components/LoginForm"
import backgroundIMG from "../images/loginpicture.jpg"
import { useState , useContext } from "react";
import Axios from "axios"
import { LoginContext } from "../context/LoginContext"


const LoginPage = () =>{

    const [login,setLogin] = useState(false);
    const history = useHistory();
    const {value1,accountContext} = useContext(LoginContext);
    const [loginName,setLoginName] = value1;
    const [account,setAccount] = accountContext;
    function LoginHandler(loginData){
        

        Axios.get("http://localhost:3001/api/login")
        .then((response)=>{
            const findAccount = response.data.find((item)=>{
                return (item.accountLoginName===loginData.name && item.accountPassword===loginData.password)
            })

            if(findAccount!==undefined){
                setLoginName(loginData.name)
                setAccount(findAccount)
                setLogin(true)
                console.log(account)

            }
        })
        if(login===true){
            history.replace("/movies")
        }
        
    }
    
    return(
        <div>
            <div className={classes.background}>
                <img src={backgroundIMG} alt="background-img" className={classes.backgroundIMG}/>
            </div>
            <div className={classes.blackBar}>
                <LoginForm onLoginHandler={LoginHandler}/>
            </div>  
        </div>
    )
}

export default LoginPage;