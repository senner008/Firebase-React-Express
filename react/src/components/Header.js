
import React from 'react';
import "../css/header.css"

function Header (props) {
    return (
        <div className="header">
            <h2>Header</h2>
            {props.children}
        </div>
    )
}

export default Header;