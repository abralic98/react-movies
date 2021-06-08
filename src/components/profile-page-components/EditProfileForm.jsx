
import classes from "./EditProfileForm.module.css"
import { useRef } from "react"

const EditProfileForm = () =>{
    const enteredLoginName = useRef();
    const enteredName = useRef();
    const enteredEmail = useRef();
    const enteredPassword = useRef();
    function submitChanges(e){
        e.preventDefault()
        console.log(enteredLoginName.current.value)
    }
    return (
        <div className={classes.body}>
            <form onSubmit={submitChanges}action="" className={classes.form}>
                <div className={classes.labelInputBlock}>
                    <div className={classes.labelInput}>
                        <label className={classes.label} htmlFor="">Login Name</label>
                        <input ref={enteredLoginName} type="text" />
                    </div>
                    <div className={classes.labelInput}>
                        <label className={classes.label} htmlFor="">Full Name</label>
                        <input ref={enteredName}type="text" />
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
                        <input ref={enteredPassword} type="number" />
                    </div>
                </div>
                <button className={classes.button}>Save Changes</button>
            </form>
        </div>
    )
}

export default EditProfileForm;