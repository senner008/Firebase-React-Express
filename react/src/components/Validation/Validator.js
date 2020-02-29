import React, { useContext} from 'react';
import {ValidationContext} from "./Validation.js";
import "../../css/validation.css"

function Validator ({description, validator, value, children}) {

    const {childrenState, setChildrenState, index} = useContext(ValidationContext);

    const validatedValue = validator(value);

    if (childrenState[index] !== validatedValue) {
        setChildrenState(prev => {
            const prevClone = [...prev];
            prevClone[index] = validator(value);
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
                React.cloneElement(children, { value: value })
            }
        </>
    )
}

export default Validator