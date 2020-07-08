import React from "react";
import classes from "./SearchBar.css";

const SearchBar = (props) => {

    const inputRef = React.createRef();

    const clickHandler = () => {
        let value = inputRef.current.value;
        inputRef.current.value = "";
        props.clicked(value);
    }

    return (
        <div className={classes.search}>
            <input ref={inputRef} type="text" className={classes.searchTerm} placeholder="Search..."/>
            <button className={classes.searchButton} onClick={clickHandler}>
                <img className={classes.searchIMG} src="https://img.icons8.com/ios-filled/50/000000/search.png"/>
            </button>
        </div>
    );
}

export default SearchBar;





