import React, {useContext, useEffect, useState} from 'react';
import getPrivateContent from "../helpers/ajax.js"
import {UserContext} from "../App.js"
import Loader from "./Loader.js"

export default function Main () {

    const user = useContext(UserContext);
    const [content, setContent] = useState("");
    const [loadingState, setLoadingState] = useState(false);

    const errorMsg = "Oops! Something went wrong";
    
    useEffect(() => { 
        if (user) {
            ;(async () => {
                setLoadingState(true);
                try {
                    const result = await getPrivateContent();
                    setContent(result.body);
                } catch (err) {
                    typeof err === "string"
                     ? setContent(err)
                     : setContent(errorMsg);
                }
                setLoadingState(false)
            })();
        } else {
            setContent("Please login to see main content");
        }
    }, [user])

    return (
        <>
        {
            loadingState 
                ? <Loader/>
                : <h2>{content}</h2>
        }
        </>
    )
}