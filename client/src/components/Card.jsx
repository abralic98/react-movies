import classes from "../components/Card.module.css"
const Card = (props) =>{
    return(
        <div className={classes.Card}>
            {props.children}
        </div>
    )
}

export default Card;