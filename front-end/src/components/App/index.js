// == Import
import React, { useEffect } from 'react';
import Register from 'src/containers/Register';
import Login from 'src/containers/Login';
import { redirectTo } from 'src/action/user';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UsersList from 'src/containers/UsersList';


// == Composant
const App = ({ redirectLink, displayUsersList }) => {
  
  // Dispatching in a component. Use with caution
  const dispatch = useDispatch();
    // history hook to perform redirections
  const history = useHistory();
  // everytime redirectLink is modified due to the REDIRECT action (action creator = redirectTo)
  // the url is pushed by the new link
  useEffect(() => {
    displayUsersList();
    const redirectToLink = redirectLink;
    if (redirectToLink) {
      dispatch(redirectTo(false));
      history.push(redirectToLink);
    }
  }, [redirectLink]);
  
  return (
  <div className="app">
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/users" exact>
        <UsersList/>
      </Route>
    </Switch>
  </div>
)};

// == Export
export default App;
