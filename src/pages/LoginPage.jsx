import { useHistory } from "react-router-dom"
import classes from "../pages/LoginPage.module.css"
import LoginForm from "../components/LoginForm"
import backgroundIMG from "../images/loginpicture.jpg"
import { useState } from "react";



const LoginPage = () =>{
    const [login,setLogin] = useState(false);
    const history = useHistory();
    function LoginHandler(loginData){
        fetch(
            "https://react-movies-d3075-default-rtdb.firebaseio.com/accounts.json",
            
        ).then(response =>{
            console.log(loginData)
            return response.json();
        }
        ).then(data =>{
            const dbAccounts = []

            for(const key in data){
                const account = {
                    id:key,
                    ...data[key]
                }
                dbAccounts.push(account)
                
            }
            console.log(dbAccounts)

            if(dbAccounts.some(person => person.name === loginData.name && person.password===loginData.password)){
                setLogin(true);
            }
        }

        )
        console.log(login)
        if(login===true){
            history.replace("/home")
        }
        
    }
    
    return(
        <div>
            <div className={classes.background}>
                <img src={backgroundIMG} alt="background-img" className={classes.backgroundIMG}/>
            </div>
            <div className={classes.blackBar}>
                <LoginForm onLoginHandler={LoginHandler}/>
            </div>  
        </div>
    )
}

export default LoginPage;