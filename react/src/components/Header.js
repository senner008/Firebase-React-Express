
import React, {useContext } from 'react';
import "../css/header.css"
import {UserContext} from "../App.js"
import firebaseInst from "../helpers/firebase.js";
import {
    useHistory
} from "react-router-dom";

function Header (props) {

    let history = useHistory();
    const user = useContext(UserContext);

    const signOut = () => {
        firebaseInst.signOut();
        history.push("/");
    }

    return (
        <div className="header">
            <h2>Header</h2>
            {
                user
                ? (
                    <>
                        <p>Hello, {user.displayName}</p>
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