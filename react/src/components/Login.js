
import React, { useContext, useState } from 'react';
import GoogleOAuth from "./LoginContent/GoogleOAuth"
import SignInWithEmailAndPassword from "./LoginContent/SignInWithEmailAndPassWord"
import "../css/header.css"
import firebaseInst from "../helpers/firebase.js";
import {UserContext} from "../App.js"
import { useEffect } from 'react';

export default function Login (props) {

    const user = useContext(UserContext);
    const [error, setError] = useState("");

    useEffect(() => {
        if (user && error) setError("");
    }, [user]);

    return (
        <>
            <h2>Login</h2>
            <h3>{error}</h3>
            {
                user
                    ? <p>Hello, {user.displayName}</p>
                    : <p>Please sign in.</p>
            }
            {
                user
                    ? <button onClick={() =>  firebaseInst.signOut()}>Sign out</button>
                    : (
                        <>
                            <SignInWithEmailAndPassword firebase={firebaseInst} setError={setError}/>
                            <GoogleOAuth firebase={firebaseInst}/>
                        </>
                    )
            }
          
        </>
    )
}

