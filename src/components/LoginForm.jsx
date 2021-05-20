import { Link } from "react-router-dom"
import classes from "../components/LoginForm.module.css"

const LoginForm = () =>{
    return(
        <div>
            <form className={classes.form} action="">
                <div className={`${classes.flexBlock} ${classes.flexBoxMargin}`}>
                    <label className={classes.label} htmlFor="username">User Name</label>
                    <input type="text" required id="username"/>
                </div>
                <div className={classes.flexBlock}>
                    <label className={classes.label} htmlFor="password">Password</label>
                    <input type="text" required id="password"/>
                </div>
                <div className={classes.flexBlock}>
                    <div className={classes.register}>
                        <h4>Dont Have Account?</h4>
                        <Link to="/register"><h4>Register</h4></Link>
                    </div>
                </div>
                <div className={classes.flexBlock}>
                    <button className={classes.btnLogin}>Login</button>
                </div>           
            </form>
        </div>
        
        
    )
}

export default LoginForm