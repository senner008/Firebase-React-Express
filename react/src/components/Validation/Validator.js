import React, { useContext, useEffect } from 'react';
import {ValidationContext} from "./Validation.js";
import "../../css/validation.css"

export default function Validator ({description, validator, value, children}) {

    const validationContext = useContext(ValidationContext);

    useEffect(() => {
        validationContext.setChildrenState(prev => {
            const prevClone = [...prev]
            prevClone[validationContext.index] = validator(value);
            return prevClone;
        })
    }, [value]);

    return (
        <>
            <div className="validate-error">
                {
                    validator(value) || !value
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