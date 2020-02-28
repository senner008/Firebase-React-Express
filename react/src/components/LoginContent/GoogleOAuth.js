import React, { useContext } from 'react';
import {UserContext} from "../../App.js"

function GoogleOAuth ({firebase}) {

    return (
      <div>
          <button onClick={() =>  firebase.signInGoogle()}>Sign in with Google</button>
      </div>
    );
}

export default GoogleOAuth
