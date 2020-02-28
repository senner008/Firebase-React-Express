import React, { useState } from 'react';
import EmailInput from "../FormInputs/EmailInput"
import PasswordInput from "../FormInputs/PasswordInput"
import validationHelper from "../../helpers/validateHelper"
import Validator from "../Validation/Validator"
import Validation from "../Validation/Validation"

export default function SignInForm ({signIn}) {

    const [emailState, setEmailState] = useState("");
    const [passwordState, setPasswordState] = useState("");
    const [validationState, setValidationState] = useState(false);

    const submitSignin = (e) => {
        e.preventDefault();
        signIn(emailState, passwordState);
    }

    return (
        <form onSubmit={submitSignin}>
            <Validation setState={setValidationState}>
                <Validator 
                    description="Please enter a valid email" 
                    validator={validationHelper.email} 
                    value={emailState}
                >
                    <EmailInput setValue={setEmailState}/>
                </Validator>
                <Validator 
                    description="Please enter a valid password" 
                    validator={validationHelper.password} 
                    value={passwordState}
                >
                    <PasswordInput setValue={setPasswordState}/>
                </Validator>
            </Validation>
            <input type="submit" value="Sign In" disabled={validationState ? false : true}/>
        </form>
    );
}

