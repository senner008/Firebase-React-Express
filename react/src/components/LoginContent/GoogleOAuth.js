import React from 'react';

function GoogleOAuth ({firebase}) {

    return (
      <div>
          <button onClick={() =>  firebase.signInGoogle()}>Sign in with Google</button>
      </div>
    );
}

export default GoogleOAuth
