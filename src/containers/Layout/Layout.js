import React, {useState} from "react";
import Auxi from "../../HOC/Auxi/Auxi";
import Toolbar from "../Toolbar/Toolbar";
import NewsFeed from "../Newsfeed/Newsfeed";
import Modal from "../../components/UI/Modal/Modal";
import ContactUs from "../../components/ContactUs/ContactUs";
import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";



const Layout = (props) => {

    const [state, setState] = useState({categoryName: "general"});
    const [modalState, setModalState] = useState({showModal: false});

    const changeState = (categoryName) => {
        setState({categoryName: categoryName})
    }

    const modalShowToggleHandler = (show) => {
        setModalState({showModal: show});
    }

    const formSubmittedHandler = (name, email, message) => {
        console.log(name, email, message);
        modalShowToggleHandler(false);
    }

    const searchClicked = (query) => {
        props.history.push(
        {
            pathname: "/general",
            search: '?query=' + query,
        }
        )
    }


    return (
        <Auxi>
            <Toolbar modalShowToggle={() => modalShowToggleHandler(true)}
                     clicked={(categoryName) => changeState(categoryName)}
                     searchClicked={(event) => searchClicked(event)}
                     logoClickHandler={()=> {changeState("")}}
            />
            <Modal
                modalClosed={() => modalShowToggleHandler(false)}
                show={modalState.showModal}
            >
                <ContactUs formSubmitted={(name, email, message) => {
                    formSubmittedHandler(name, email, message)
                }}/>
            </Modal>
            <main>
                <Switch>
                    <Route key="/" path="/" exact component={NewsFeed}/>
                    <Route key="/business" path="/business" component={NewsFeed}/>
                    <Route key="/entertainment" path="/entertainment" component={NewsFeed}/>
                    <Route key="/health" path="/health" component={NewsFeed}/>
                    <Route key="/sports" path="/sports" component={NewsFeed}/>
                </Switch>
            </main>
        </Auxi>
    );
}

export default withRouter(Layout);