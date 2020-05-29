import React, {useContext } from 'react';
import "../css/main.css"

export default function MainContainer({children}) {

    return (
        <div className="main">
            {
                children
            }
        </div>
    )
}