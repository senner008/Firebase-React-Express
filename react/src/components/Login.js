
import React, { useContext, useState } from 'react';
import GoogleOAuth from "./LoginContent/GoogleOAuth"
import SignInWithEmailAndPassword from "./LoginContent/SignInWithEmailAndPassWord"
import "../css/header.css"
import firebaseInst from "../helpers/firebase.js";
import {UserContext} from "../App.js"
import {
    useHistory,
    useLocation
} from "react-router-dom";
import { useEffect } from 'react';

export default function Login () {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const user = useContext(UserContext);
    const [error, setError] = useState("");
    
    useEffect(() => {
        if (user) {
            history.replace(from);
        }
    });

    return (
        <>
            <h2>Login</h2>
            <h3>{error}</h3>
            <p>You must log in to view the page at {from.pathname}</p>
            <SignInWithEmailAndPassword firebase={firebaseInst} setError={setError}/>
            <GoogleOAuth firebase={firebaseInst}/>
        </>
    )
}

