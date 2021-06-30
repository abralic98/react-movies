import { Link } from "react-router-dom"
import classes from "../components/LoginForm.module.css"
import { useRef } from "react";

const LoginForm = (props) =>{
    const nameInputRef = useRef();
    const passwordInputRef = useRef();

    function submitLogin(e){
        e.preventDefault();
        const name = nameInputRef.current.value;
        const password = passwordInputRef.current.value;

        const loginData = {
            name:name,
            password:password
        }

        props.onLoginHandler(loginData);
    }
    return(
        <div className={classes.loginFlexBox}>
            <form className={classes.form} action="" onSubmit={submitLogin} >
                <div className={`${classes.flexBlock} ${classes.flexBoxMargin}`}>
                    <label className={classes.label} htmlFor="username">User Name</label>
                    <input type="text" required id="username" ref={nameInputRef}/>
                </div>
                <div className={classes.flexBlock}>
                    <label className={classes.label} htmlFor="password">Password</label>
                    <input type="text" required id="password" ref={passwordInputRef}/>
                </div>
                <div className={classes.flexBlock}>
                    <div className={classes.register}>
                        <h4>Dont Have Account?</h4>
                        <Link to="/register"><h4>Register</h4></Link>
                    </div>
                </div>
                <div className={classes.flexBlock}>
                    <button onClick={submitLogin} className={classes.btnLogin}>Login</button>
                </div>           
            </form>
        </div>
        
        
    )
}

export default LoginForm