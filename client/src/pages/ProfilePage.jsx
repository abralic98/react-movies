
import HeaderHomePage from "../components/home-page-components/HeaderHomePage"
import AboutThisApp from "../components/profile-page-components/AboutThisApp";
import EditProfileForm from "../components/profile-page-components/EditProfileForm";
import UserInfoBlock from "../components/profile-page-components/UserInfoBlock";
import { MovieProvider } from "../context/SearchContext";
import classes from "./ProfilePage.module.css"



const ProfilePage = () =>{
    return (
        <div className={classes.body}>
            <MovieProvider>
                <HeaderHomePage/> 
            </MovieProvider>
            <div className={classes.flexBox}>
                <UserInfoBlock />
                <EditProfileForm/>
            </div>
             
        </div>
    )
}

export default ProfilePage;