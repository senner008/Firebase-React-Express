import React from 'react';
import SignInForm from "./SignInForm"

export default function SignInWithEmailAndPassWord ({firebase, setError}) {

    const signIn = (email, pass) => {
      firebase.signInEmailAndPassword(email, pass)
          .catch(err => setError(err.message))
    }

    return (
      <>
        <SignInForm signIn={signIn}/>
      </>
    );
}

