import React, {createContext, useState, useEffect} from 'react';
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import About from "./components/About.js"
import Login from "./components/Login.js"
import PrivateRoute from "./components/PrivateRoute.js"
import firebaseInst from "./helpers/firebase.js";
import ajaxContent from "./helpers/ajax.js"
import {ajaxUrls} from "./helpers/ajax.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const UserContext = createContext(null);
const AzureFunctionContext = createContext(null);

function App () {

   const [userState, setUserState] = useState(null);
   const [userFetched, setUserFetched] = useState(false);
   const [azureFunctionResponseState, setAzureFunctionResponseState] = useState(false);
   const [azureResponseMessage, setAzureResponseMessage] = useState(false);

   function getAzureResponse (user) {
    ajaxContent(ajaxUrls.getName, user.displayName)
      .then(res => {
        setAzureFunctionResponseState(true)
        setAzureResponseMessage(res)
      });
   }

    useEffect(() => {
      firebaseInst.init();
      firebaseInst.getAuth().onAuthStateChanged(function(user) {
        setUserFetched(true);
        if (user) {
          getAzureResponse(user);
          setUserState(user);
        } else {
          setUserState(null);
        }
      }); 
    }, []);

  if (!userFetched && !azureFunctionResponseState) {
    console.log("fetching user...")
    return <div>Loading...</div>
  }

  return (
    <Router>
      <UserContext.Provider value={userState}>
      <AzureFunctionContext.Provider value={azureResponseMessage}>
        <Header>
          <nav>
            <ul>
              <li>
                <Link to="/main">Main</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </Header>
      </AzureFunctionContext.Provider>
        <Switch>
          <PrivateRoute path="/main">
            <Main />
          </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
export {
  AzureFunctionContext,
  UserContext
};


