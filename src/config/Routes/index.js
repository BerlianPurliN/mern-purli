import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Home from '../../pages/Home';

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="register">
                <Register />
            </Route>
            <Route path="/">
                <Hom />
            </Route>
        </Switch>
    </Router>
  )
}

export default Routes