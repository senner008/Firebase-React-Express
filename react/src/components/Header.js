
import React, {useContext } from 'react';
import "../css/header.css"
import {UserContext, AzureFunctionContext} from "../App.js"
import firebaseInst from "../helpers/firebase.js";
import {
    useHistory
} from "react-router-dom";

function Header (props) {

    let history = useHistory();
    const user = useContext(UserContext);
    const userMessage = useContext(AzureFunctionContext);

    const signOut = () => {
        firebaseInst.signOut();
        history.push("/");
    }

    return (
        <div className="header">
            <h2>Header Component</h2>
            {
                user
                ? (
                    <>
                        <p>{userMessage}</p>
                        <button onClick={signOut}>Sign out</button>
                    </>
                )
                : <p>You are not logged in.</p>
            }
            {props.children}
        </div>
    )
}

export default Header;