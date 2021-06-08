import classes from "./UserInfoBlock.module.css"
import unity from "../../images/unity.jpg"
import { useHistory } from "react-router-dom"
import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"


const UserInfoBlock = () =>{
    const history = useHistory();
    const {value2} = useContext(LoginContext);
    const [loggedAccount,setLoggedAccount] = value2

    function redirectToLogin(){
        history.replace("/login")
    }

    
   
    return (
        <div className={classes.infoBlock}>
            <h2>Welcome {loggedAccount.name}</h2>
            <div className={classes.avatarBlock}>
                <div className={classes.avatar}>
                    <img src={unity} alt="kek" />
                </div>
                <div className={classes.blackHoverBlock}><p>Change Picture</p></div>
            </div>
            <div className={classes.labels}>
                <p>Full Name: </p>
                <p>Age: </p>
                <p>E-mail: {loggedAccount.email}</p>
            </div>
            
            <button onClick={redirectToLogin}>Change Account</button>
        </div>
    )
}
export default UserInfoBlock;