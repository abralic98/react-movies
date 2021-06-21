import { createContext, useState } from "react"
export const LoginContext = createContext();

export const LoginProvider = (props)=>{
    const [navigation,setNavigation] = useState(0); 
    const [movieCategory,setMovieCategory] = useState(0); //0 default 1 action 2 horror 3 scifi 4 mystery 5 comedy 6 romantic
    const [loginName,setLoginName] = useState();
    const [accountFavoriteItem,setAccountFavoriteItem] = useState({})
    const [accountFavoriteList,setAccountFavoriteList] = useState([])
    const [account,setAccount] = useState({
        accountLoginName:"",
        accountPassword:"",
        accountEmail:"",
        accountFullName:"",
        accountAge:"",
        accountAvatar:"",
        accountFavorites:""
    })
    return (
        <LoginContext.Provider value = {{
            value1:[loginName,setLoginName],
            accountContext:[account,setAccount],
            navigation1:[navigation,setNavigation],
            value10:[movieCategory,setMovieCategory],
            accountFavoriteList1:[accountFavoriteList,setAccountFavoriteList],
            accountFavoriteItem1:[accountFavoriteItem,setAccountFavoriteItem]
        }}>
        {props.children}
        </LoginContext.Provider>
    )
}