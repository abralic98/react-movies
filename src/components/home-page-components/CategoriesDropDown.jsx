import classes from "./CategoriesDropDown.module.css"
const CategoriesDropDown = () =>{
    return(
        <div className={classes.category}>
            <div className={classes.dropDown}>
                <li className={classes.list}>Action</li>
                <li className={classes.list}>Horror</li>
                <li className={classes.list}>Sci-fi</li>
                <li className={classes.list}>Mystery</li>
                <li className={classes.list}>Comedy</li>
                <li className={classes.list}>Romantic</li>
            </div>
        </div>
        
    )
}

export default CategoriesDropDown