import React, { useContext} from 'react';
import {ValidationContext} from "./Validation.js";
import "../../css/validation.css"

function Validator ({description, validator, value, children}) {

    const {childrenState, setChildrenState, index} = useContext(ValidationContext);

    const validatedValue = validator(value);

    if (childrenState[index] !== validatedValue) {
        // update the childrenState array with a boolean at the provided index
        setChildrenState(prev => {
            const prevClone = [...prev];
            prevClone[index] = validatedValue;
            return prevClone;
        })
    }

    return (
        <>
            <div className="validate-error">
                {
                    validatedValue || !value
                        ? ""
                        : description
                }
            </div>
            {
                // pass on the value to the child component
                React.cloneElement(children, { value: value })
            }
        </>
    )
}

export default Validator