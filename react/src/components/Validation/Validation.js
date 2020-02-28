import React, { useState, createContext } from 'react';
import { useEffect } from 'react';

const ValidationContext = createContext();

export default function Validation ({setState, children}) {

    const [childrenState, setChildrenState] = useState([]);

    useEffect(() => {
        setState(childrenState.every(bool => bool));
    }, [childrenState]);

    return (
        <>
            {
                children.map((child, index) => {
                    return (
                        <div key={index}>
                            <ValidationContext.Provider value={{index, childrenState, setChildrenState}}>
                                {child}
                            </ValidationContext.Provider>
                        </div>
                    )
                })
            }
        </>
    )
}
export {ValidationContext}