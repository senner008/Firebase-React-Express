import React, {useContext, useEffect, useState} from 'react';
import ajaxContent from "../helpers/ajax.js"
import {ajaxUrls} from "../helpers/ajax.js"
import {UserContext} from "../App.js"
import Loader from "./Loader.js"

export default function Main () {

    const user = useContext(UserContext);
    const [content, setContent] = useState("");
    const [loadingState, setLoadingState] = useState(false);  
    
    useEffect(() => { 
        if (user) {
            ajaxContent(ajaxUrls.main, setLoadingState)
                .then(setContent);
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