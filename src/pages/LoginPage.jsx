import { useHistory } from "react-router-dom"
import classes from "../pages/LoginPage.module.css"
import LoginForm from "../components/LoginForm"
import backgroundIMG from "../images/loginpicture.jpg"
import { useState , useContext } from "react";
import { LoginContext } from "../context/LoginContext"



const LoginPage = () =>{
    const {value2} = useContext(LoginContext)
    const [loggedAccount,setLoggedAccount] = value2;
    const [login,setLogin] = useState(false);
    const history = useHistory();
    function LoginHandler(loginData){
        fetch(
            "https://react-movies-d3075-default-rtdb.firebaseio.com/accounts.json",
            
        ).then(response =>{
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
            for(let i=0; i<dbAccounts.length; i++){
                if(dbAccounts[i].name===loginData.name && dbAccounts[i].password===loginData.password){
                    setLoggedAccount({name:loginData.name,
                                      email:dbAccounts[i].email,

                                    })
                    setLogin(true)
                    console.log("HD");
                }
            }
            
        })
        if(login===true){
            history.replace("/movies")
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