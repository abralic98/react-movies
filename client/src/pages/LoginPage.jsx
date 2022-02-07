import { useHistory } from "react-router-dom";
import classes from "../pages/LoginPage.module.css";
import LoginForm from "../components/LoginForm";
import backgroundIMG from "../images/loginpicture.jpg";
import { useState , useContext } from "react";
import Axios from "axios";
import { LoginContext } from "../context/LoginContext";


const LoginPage = () =>{
    const history = useHistory();
    const {value1,accountContext,accountFavoriteList1} = useContext(LoginContext);
    const [loginName,setLoginName] = value1;
    const [account,setAccount] = accountContext;
    const [accountFavoriteList,setAccountFavoriteList] = accountFavoriteList1;
    const [invalidInformation,setInvalidInformation] = useState({invalidInformation1:false,value:""});
    function LoginHandler(loginData){
        Axios.get("http://116.203.242.253:3002/api/login")
        .then((response)=>{
            console.log(response.data)
            const findAccount = response.data.find((item)=>{
                return (item.accountLoginName===loginData.name && item.accountPassword===loginData.password);
            })
            if(findAccount===undefined){
                setInvalidInformation((prev)=>{
                    return {
                        invalidInformation1:prev.invalidInformation1=true,
                        value:"Invalid username or password"
                    }
                })
            }
            if(findAccount!==undefined){  
                localStorage.setItem("account",JSON.stringify(findAccount))
                history.push("/movies");
            }
        })   
    }
    
    return(
        <div>
            <div className={classes.blackGradient}></div>
            <div className={classes.background}>
                <img src={backgroundIMG} alt="background-img" className={classes.backgroundIMG}/>
            </div>
            {invalidInformation.invalidInformation1===true ? <p className={classes.invalidInformation}>{invalidInformation.value}</p> : null}    
            <div className={classes.blackBar}>
                <LoginForm onLoginHandler={LoginHandler}/>
            </div>  
        </div>
    )
}

export default LoginPage;