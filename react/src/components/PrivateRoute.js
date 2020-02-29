import React, { useContext } from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";
import {UserContext} from "../App.js"

export default function PrivateRoute({ children, ...rest }) {

    const user = useContext(UserContext);
    // from react-router documentation
    return (
      <Route
        {...rest}
        render={({ location }) =>
        user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }