import classes from "./UserInfoBlock.module.css"
import { useHistory } from "react-router-dom"
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext"; 
//import Axios from "axios"
import question from "../../images/question.jpg"


const UserInfoBlock = () =>{
    const history = useHistory();
    const { accountContext ,value1, editingProfile} = useContext(LoginContext);
    const [account,setAccount] = accountContext;
    const [loginName,setLoginName] = value1;
    const [editProfile,setEditProfile] = editingProfile;

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
    
   function edit(){
       setEditProfile(true);
   }
   function WindowSize(){
        const [size,setSize] = useState([window.innerWidth,window.innerHeight])
        return size;
    }
    

    const [height,width] = WindowSize();
    console.log(height);
    return (
        <div>
            {height>=900?
            <div className={classes.infoBlock}>
                <h2>Welcome {loginName}</h2>
                <div className={classes.avatarBlock}>
                    <div className={classes.avatar}>
                        <img src={account.accountAvatar===null || account.accountAvatar==="" ? question : account.accountAvatar} alt="kek" />
                    </div>
                </div>
                <div className={classes.labels}>
                    <p>Full Name: {account.accountFullName===null || account.accountFullName==="" ? "No name provided" : account.accountFullName} </p>
                    <p>Age: {account.accountAge===null || account.accountAge==="" ? "No age provided" : account.accountAge} </p>
                    <p>E-mail: {account.accountEmail===null || account.accountEmail==="" ? "no email" : account.accountEmail}</p>
                </div>
                <div className={classes.buttons}>
                    <button onClick={redirectToLogin}>Change Account</button>
                </div>
        
            </div> : null}

            {height<900 && editProfile===false?
            <div className={classes.infoBlock}>
                <h2>Welcome {loginName}</h2>
                <div className={classes.avatarBlock}>
                    <div className={classes.avatar}>
                        <img src={account.accountAvatar===null || account.accountAvatar==="" ? question : account.accountAvatar} alt="kek" />
                    </div>
                </div>
                <div className={classes.labels}>
                    <p>Full Name: {account.accountFullName===null || account.accountFullName==="" ? "No name provided" : account.accountFullName} </p>
                    <p>Age: {account.accountAge===null || account.accountAge==="" ? "No age provided" : account.accountAge} </p>
                    <p>E-mail: {account.accountEmail===null || account.accountEmail==="" ? "no email" : account.accountEmail}</p>
                </div>
                <div className={classes.buttons}>
                    <button onClick={edit}>Edit Profile</button>
                    <button onClick={redirectToLogin}>Change Account</button>
                </div>
        
            </div> : null}
            
       </div>
        
    )
}
export default UserInfoBlock;