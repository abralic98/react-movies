
import { useState, createContext , useEffect } from "react";
export const LoginContext = createContext();
export const LoginContextProvider = (props) =>{     
    const [loggedAccount,setLoggedAccount] = useState({});
    return (
        <LoginContext.Provider value={{ 
            value2: [loggedAccount,setLoggedAccount],
            
            }} >
            {props.children}
        </LoginContext.Provider>
    )
}