import React from 'react';

function GoogleOAuth ({firebase}) {

    return (
      <>
        <button onClick={() =>  firebase.signInGoogle()}>Sign in with Google</button>
      </>
    );
}

export default GoogleOAuth
