import React from "react";

import fakeNews from "../../assets/fakeNews.png"

import classes from "./Logo.css"
const Logo = (props) => (
    <div onClick={props.clicked} className={classes.Logo} style={{height: props.height}}>
        <img src={fakeNews} alt="MyBurger"/>
    </div>
);

export default Logo;