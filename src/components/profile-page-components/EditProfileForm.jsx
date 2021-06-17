import Axios from "axios"
import classes from "./EditProfileForm.module.css"
import { useRef, usecontext, useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import { useHistory } from "react-router"
const EditProfileForm = () =>{
    const enteredLoginName = useRef();
    const enteredName = useRef();
    const enteredEmail = useRef();
    const enteredPassword = useRef();
    const enteredAge = useRef();
    const enteredAvatar = useRef();
    const {value1 ,accountContext} = useContext(LoginContext);
    const [loginName,setLoginName] = value1;
    const [account,setAccount] = accountContext;

    const history = useHistory();
   
    function submitChanges(e){
        e.preventDefault()
        if(enteredPassword.current.value!=="" && enteredEmail.current.value!=="" && enteredName.current.value!=="" && enteredAge.current.value!=="" ){
            Axios.put("http://localhost:3001/api/edit/account", {
                //updateName: enteredLoginName.current.value,
                updatePassword: enteredPassword.current.value,
                updateEmail: enteredEmail.current.value,
                updateFullName: enteredName.current.value,
                updateAccountAge: enteredAge.current.value,
                accountLoginName: loginName,
                updateAvatar : enteredAvatar.current.value
             })
            setAccount({
                //accountLoginName:enteredLoginName.current.value,
                accountPassword:enteredPassword.current.value,
                accountEmail:enteredEmail.current.value,
                accountFullName:enteredName.current.value,
                accountAge:enteredAge.current.value,
                accountAvatar:enteredAvatar.current.value
            })
            history.replace("/login")
        }
        
    }
    return (
        <div className={classes.body}>
            <form onSubmit={submitChanges}action="" className={classes.form}>
                <div className={classes.labelInputBlock}>
                    {/*<div className={classes.labelInput}>
                        <label className={classes.label} htmlFor="">Login Name</label>
                        <input ref={enteredLoginName} type="text" />
                        </div>*/}
                    <div className={classes.labelInput}>
                        <label className={classes.label} htmlFor="">Full Name</label>
                        <input ref={enteredName}type="text"/>
                    </div>
                    <div className={classes.labelInput}>
                        <label className={classes.label} htmlFor="">Email</label>
                        <input ref={enteredEmail}type="email" />
                    </div>
                    <div className={classes.labelInput}>
                        <label className={classes.label} htmlFor="">Password</label>
                        <input ref={enteredPassword} type="password" />
                    </div>
                    <div className={classes.labelInput}>
                        <label className={classes.label} htmlFor="">Age</label>
                        <input ref={enteredAge} type="number" />
                    </div>
                    <div className={classes.labelInput}>
                        <label className={classes.label} htmlFor="">Avatar</label>
                        <input ref={enteredAvatar} type="url" required/>
                    </div>

                </div>
                <button onClick={submitChanges} className={classes.button}>Save Changes</button>
            </form>
        </div>
    )
}

export default EditProfileForm;