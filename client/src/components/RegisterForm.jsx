import { Link } from "react-router-dom"
import classes from "../components/RegisterForm.module.css"
import { useRef } from "react";
const RegisterForm = (props) =>{
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    function submitRegistration(e){
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail =  emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const registrationData = {
            name:enteredName,
            email:enteredEmail,
            password:enteredPassword
        }

        props.onRegister(registrationData)
    }
    return(
        <div className={classes.registerFlexBox}>
            <form onSubmit={submitRegistration} className={classes.form} action="">
                <div className={`${classes.flexBlock} ${classes.flexBoxMargin}`}>
                    <label className={classes.label} htmlFor="username" >User Name</label>
                    <input type="text" required id="username" ref={nameInputRef}/>
                </div>
                <div className={classes.flexBlock}>
                    <label className={classes.label} htmlFor="email">E-mail</label>
                    <input type="email" required id="email" ref={emailInputRef}/>
                </div>
                <div className={classes.flexBlock}>
                    <label className={classes.label} htmlFor="password">Password</label>
                    <input type="text" required id="password" ref={passwordInputRef}/>
                </div>
                <div className={classes.flexBlock}>
                    <div className={classes.register}>
                        <h4>Allready Have Account?</h4>
                        <Link to="/login"><h4>Login</h4></Link>
                    </div>
                </div>
                <div className={classes.flexBlock}>
                    <button className={classes.btnLogin}>Register</button>
                </div>           
            </form>
        </div>
    )
}

export default RegisterForm