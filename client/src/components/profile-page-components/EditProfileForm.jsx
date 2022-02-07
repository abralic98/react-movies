import Axios from "axios";
import classes from "./EditProfileForm.module.css";
import { useRef, useState, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useHistory } from "react-router";
const EditProfileForm = () =>{
    const enteredName = useRef();
    const enteredEmail = useRef();
    const enteredPassword = useRef();
    const enteredAge = useRef();
    const enteredAvatar = useRef();
    const {value1, accountContext, editingProfile, navigation1} = useContext(LoginContext);
    const [editProfile,setEditProfile] = editingProfile;
    const [loginName,setLoginName] = value1;
    const account = JSON.parse(localStorage.getItem("account"))
    const [navigation,setNavigation] = navigation1;

    const history = useHistory();
   
    function submitChanges(e){
        e.preventDefault()
        console.log(account.ID)
        if(enteredPassword.current.value!=="" && enteredEmail.current.value!=="" && enteredName.current.value!=="" && enteredAge.current.value!=="" && enteredAvatar.current.value!=="" ){
            Axios.put("http://116.203.242.253:3002/api/edit/account", null , {
                //updateName: enteredLoginName.current.value,
                params:{
                    updatePassword: enteredPassword.current.value,
                    updateEmail: enteredEmail.current.value,
                    updateFullName: enteredName.current.value,
                    updateAccountAge: enteredAge.current.value,
                    ID: account.ID,
                    updateAvatar : enteredAvatar.current.value
                }
             })
             localStorage.removeItem("account");
            history.push("/login");
        }
        setEditProfile(false);
        setNavigation(0);
            
    }
    function cancelEdit(){
        setEditProfile(false);
    }
    function WindowSize(){
        const [size,setSize] = useState([window.innerWidth,window.innerHeight])
        return size;
    }
    

    const [width,height] = WindowSize();
    return (
        <div>
            {width>=900 ?
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
            </div> : null}


            {width<900 && editProfile===true?
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
                    <div className={classes.buttons}>
                        <button onClick={submitChanges} className={classes.button}>Save Changes</button>
                        <button onClick={cancelEdit}className={classes.button}>Cancel Edit</button>
                    </div>
                    
                </form>
            </div> : null}
        </div>
        
       
    )
}

export default EditProfileForm;