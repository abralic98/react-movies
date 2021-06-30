import { useHistory } from "react-router-dom"
import classes from "../pages/LoginPage.module.css"
import LoginForm from "../components/LoginForm"
import backgroundIMG from "../images/loginpicture.jpg"
import { useState , useContext } from "react";
import Axios from "axios"
import { LoginContext } from "../context/LoginContext"


const LoginPage = () =>{
    const history = useHistory();
    const {value1,accountContext,accountFavoriteList1} = useContext(LoginContext);
    const [loginName,setLoginName] = value1;
    const [account,setAccount] = accountContext;
    const [accountFavoriteList,setAccountFavoriteList] = accountFavoriteList1;
    const [invalidInformation,setInvalidInformation] = useState({invalidInformation1:false,value:""})
    function LoginHandler(loginData){
        

        Axios.get("http://localhost:3001/api/login")
        .then((response)=>{
            const findAccount = response.data.find((item)=>{
                return (item.accountLoginName===loginData.name && item.accountPassword===loginData.password)
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
                setLoginName(loginData.name)
                setAccount(findAccount)
                if(findAccount.accountFavorites!==null){
                    setAccountFavoriteList(JSON.parse(findAccount.accountFavorites))
                }
                if(findAccount.accountFavorites===null){
                    setAccountFavoriteList([])
                }   
                history.replace("/movies")
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