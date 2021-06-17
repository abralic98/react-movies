import classes from "./UserInfoBlock.module.css"
import unity from "../../images/unity.jpg"
import { useHistory } from "react-router-dom"
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext"; 
//import Axios from "axios"
import question from "../../images/question.jpg"


const UserInfoBlock = () =>{
    const history = useHistory();
    const { accountContext ,value1 } = useContext(LoginContext);
    const [account,setAccount] = accountContext;
    const [loginName,setLoginName] = value1;
    function redirectToLogin(){
        history.replace("/login")
    }
    
    /*Axios.get("http://localhost:3001/api/accounts")
    .then((response)=>{
        setAccount({
            accountName:response.data.accountLoginName,
            accountPassword:"",
            accountEmail:"",
            accountFullName:"",
            accountAge:"",
            accountAvatar:""
        })
    })*/
    
   
    
    return (
        <div className={classes.infoBlock}>
            <h2>Welcome {loginName}</h2>
            <div className={classes.avatarBlock}>
                <div className={classes.avatar}>
                    <img src={account.accountAvatar===null || account.accountAvatar==="" ? question : account.accountAvatar} alt="kek" />
                </div>
                {/*<div className={classes.blackHoverBlock}><p>Change Picture</p></div>*/}
            </div>
            <div className={classes.labels}>
                <p>Full Name: {account.accountFullName===null || account.accountFullName==="" ? "No name provided" : account.accountFullName} </p>
                <p>Age: {account.accountAge===null || account.accountAge==="" ? "No age provided" : account.accountAge} </p>
                <p>E-mail: {account.accountEmail===null || account.accountEmail==="" ? "no email" : account.accountEmail}</p>
            </div>
            
            <button onClick={redirectToLogin}>Change Account</button>
        </div>
    )
}
export default UserInfoBlock;