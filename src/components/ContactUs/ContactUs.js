import React, {useState} from "react";

import classes from "./ContactUs.css"

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const ContactUs = (props) => {

    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const messageInput = React.createRef();

    const [state, setState] = useState({
        validationClassForElem: {
        }
    })

    const validate = () => {
        const validations = {valid: true};
        let name = nameInput.current.value;
        let email = emailInput.current.value;
        let message = messageInput.current.value;


        if (name === ""){
            validations.name = classes.Validation;
            validations.valid = false;
        }
        if (email === "" || !emailRegExp.test(String(email).toLowerCase())){
            validations.email = classes.Validation;
            validations.valid = false;
        }
        if (message === ""){
            validations.message = classes.Validation;
            validations.valid = false;
        }
        if(validations.valid){
            nameInput.current.value = "";
            emailInput.current.value = "";
            messageInput.current.value = "";
            props.formSubmitted(name, email, message);
        }
        else{
            setState({validationClassForElem: validations});
        }
    }

    return (
        <form>
            <label className={classes.FormLabel} htmlFor="fname">Name
                <span className={classes.Required}>*</span>
            </label>
            <input ref={nameInput} className={[classes.FormInput, state.validationClassForElem.name].join(" ")} type="text" id="fname" name="fname"/>

            <label className={classes.FormLabel} htmlFor="email">Email
                <span className={classes.Required}>*</span>
            </label>
            <input ref={emailInput} className={[classes.FormInput, state.validationClassForElem.email].join(" ")} type="text" id="email" name="email"/>


            <label className={classes.FormLabel} htmlFor="message">Message
                <span className={classes.Required}>*</span>
            </label>
            <textarea ref={messageInput} rows={50} cols={50} className={[classes.FormInput, state.validationClassForElem.message].join(" ")} type="text" id="message" name="message"/>

            <div className={classes.BtnContainer}>
                <button className={classes.FormSubmit} type="button" onClick={validate}>Submit</button>
            </div>
        </form>
    );
}

export default ContactUs;