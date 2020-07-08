import React from "react";
import classes from "./Category.css";
import {withRouter} from "react-router";

const Category = (props) => {

    const navigationHandler = (category) =>{
        props.history.push({pathname: "/" + category});
    }
    return (
        <div
            className={classes.Category}
            onClick={() => navigationHandler(props.categoryName)}
        >
            {props.categoryName.charAt(0).toUpperCase() + props.categoryName.slice(1)}
        </div>
    );
}

export default withRouter(Category);