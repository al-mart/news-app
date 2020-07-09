import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import classes from "./Toolbar.css";
import Category from "../../components/Category/Category";
import Logo from "../../components/Logo/Logo";
import {withRouter} from "react-router";

const ToolBar = (props) => {

    const categoryNames = [
        "business",
        "entertainment",
        "health",
        "sports"
    ]

    const logoClickHandler = () => {
        props.logoClickHandler();
        props.history.push({pathname: "/"});
    }

    return (
        <header className={classes.Header}>
            <Logo clicked={() => {
                logoClickHandler()
            }}/>
            <nav className={classes.CategoriesMenu}>
                {categoryNames.map((categoryName, index) => {
                    return (
                        <Category
                            key={index}
                            categoryName={categoryName}
                            />
                    )
                })}
            </nav>
            <SearchBar clicked={(event) => props.searchClicked(event)}/>
            <div onClick={props.modalShowToggle} className={classes.Header__ContactTab}>Contact Us</div>
        </header>
    );
}

export default withRouter(ToolBar);
