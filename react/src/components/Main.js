import React, {useContext, useEffect, useState} from 'react';
import getPrivateContent from "../helpers/ajax.js"
import {UserContext} from "../App.js"

export default function Main () {

    const user = useContext(UserContext);
    const [content, setContent] = useState("");
    
    useEffect(() => { 
        if (user) {
            ;(async () => {
                try {
                    const result = await getPrivateContent();
                    setContent(result.body)
                } catch (err) {
                    setContent(err)
                }
            })();
        } else {
            setContent("Please login to see main content");
        }
    }, [user])

    return (
        <h2>{content}</h2>
    )
}