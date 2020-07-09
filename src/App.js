import React from 'react';
import './App.css';
import { HashRouter} from "react-router-dom";
import Layout from "./containers/Layout/Layout";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Layout>
                </Layout>
            </div>
        </HashRouter>
    );
}

export default App;
