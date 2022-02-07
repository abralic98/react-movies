import classes from "./UserInfoBlock.module.css";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext"; 

import question from "../../images/question.jpg";


const UserInfoBlock = () =>{
    const history = useHistory();
    const { accountContext ,value1, editingProfile, navigation1} = useContext(LoginContext);
    const [account,setAccount] = accountContext;
    const acc = JSON.parse(localStorage.getItem("account"))
    console.log(acc)
    const [loginName,setLoginName] = value1;
    const [editProfile,setEditProfile] = editingProfile;
    const [navigation,setNavigation] = navigation1;

    function redirectToLogin(){
        setNavigation(0);
        history.push("/login");
    }
    function edit(){
       setEditProfile(true);
    }
    function WindowSize(){
        const [size,setSize] = useState([window.innerWidth,window.innerHeight]);
        return size;
    }
    const [width,height] = WindowSize();

    return (
        <div>
            {width>=900?
            <div className={classes.infoBlock}>
                <h2>Welcome {acc.accountLoginName}</h2>
                <div className={classes.avatarBlock}>
                    <div className={classes.avatar}>
                        <img src={acc.accountAvatar===null || acc.accountAvatar==="" ? question : acc.accountAvatar} alt="kek" />
                    </div>
                </div>
                <div className={classes.labels}>
                    <p>Full Name: {acc.accountFullName===null || acc.accountFullName==="" ? "No name provided" : acc.accountFullName} </p>
                    <p>Age: {acc.accountAge===null || acc.accountAge==="" ? "No age provided" : acc.accountAge} </p>
                    <p>E-mail: {acc.accountEmail===null || acc.accountEmail==="" ? "no email" : acc.accountEmail}</p>
                </div>
                <div className={classes.buttons}>
                    <button onClick={redirectToLogin}>Change Account</button>
                </div>
        
            </div> : null}

            {width<900 && editProfile===false?
            <div className={classes.infoBlock}>
                <h2>Welcome {acc.accountLoginName}</h2>
                <div className={classes.avatarBlock}>
                    <div className={classes.avatar}>
                        <img src={acc.accountAvatar===null || acc.accountAvatar==="" ? question : acc.accountAvatar} alt="kek" />
                    </div>
                </div>
                <div className={classes.labels}>
                    <p>Full Name: {acc.accountFullName===null || acc.accountFullName==="" ? "No name provided" : acc.accountFullName} </p>
                    <p>Age: {acc.accountAge===null || acc.accountAge==="" ? "No age provided" : acc.accountAge} </p>
                    <p>E-mail: {acc.accountEmail===null || acc.accountEmail==="" ? "no email" : acc.accountEmail}</p>
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