import React, { useContext } from 'react';
import {UserContext} from "../../App.js"

function GoogleOAuth ({firebase}) {

    const user = useContext(UserContext);

    return (
      <div>
        <header>
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <button onClick={() =>  firebase.signOut()}>Sign out</button>
              : <button onClick={() =>  firebase.signInGoogle()}>Sign in with Google</button>
          }
        </header>
      </div>
    );
}

export default GoogleOAuth
