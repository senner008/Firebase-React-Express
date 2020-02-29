import React, { useState, createContext } from 'react';
import { useEffect } from 'react';

const ValidationContext = createContext();

export default function Validation ({setState, children}) {

    const childrenToArray = React.Children.toArray(children);
    const [childrenState, setChildrenState] = useState(childrenToArray.map(val => false));

    useEffect(() => {
        // check that all bools in childrenState array are true
        setState(childrenState.every(bool => bool));
    });

    return (
        <>
            {
                childrenToArray.map((child, index) => {
                    return (
                        <div key={index}>
                            {/* Each <Validator/> child will be provided with a unique index */}
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