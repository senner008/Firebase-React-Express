import React, {createContext, useState, useEffect} from 'react';
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import About from "./components/About.js"
import Login from "./components/Login.js"
import PrivateRoute from "./components/PrivateRoute.js"
import firebaseInst from "./helpers/firebase.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const UserContext = createContext(null);

function App () {

   const [userState, setUserState] = useState(null);

    useEffect(() => {
      firebaseInst.init();
      firebaseInst.getAuth().onAuthStateChanged(function(user) {
        if (user) {
          setUserState(user);
        } else {
          setUserState(null)
        }
      }); 
    }, []);

  return (
    <Router>
      <UserContext.Provider value={userState}>
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
export {UserContext};


