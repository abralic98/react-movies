import { Link } from "react-router-dom"
import classes from "../components/RegisterForm.module.css"
const RegisterForm = () =>{
    return(
        <div>
            <form className={classes.form} action="">
                <div className={`${classes.flexBlock} ${classes.flexBoxMargin}`}>
                    <label className={classes.label} htmlFor="username">User Name</label>
                    <input type="text" required id="username"/>
                </div>
                <div className={classes.flexBlock}>
                    <label className={classes.label} htmlFor="email">E-mail</label>
                    <input type="email" required id="email"/>
                </div>
                <div className={classes.flexBlock}>
                    <label className={classes.label} htmlFor="password">Password</label>
                    <input type="text" required id="password"/>
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