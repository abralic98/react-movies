import { createContext, useState } from "react"
export const LoginContext = createContext();

export const LoginProvider = (props)=>{
    const [loginName,setLoginName] = useState();
    const [account,setAccount] = useState({
        accountLoginName:"",
        accountPassword:"",
        accountEmail:"",
        accountFullName:"",
        accountAge:"",
        accountAvatar:""
    })
    return (
        <LoginContext.Provider value = {{
            value1:[loginName,setLoginName],
            accountContext:[account,setAccount]
        }}>
        {props.children}
        </LoginContext.Provider>
    )
}