import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Redirect
  } from "react-router-dom";
  const PrivateRoute = ({component: Component, ...rest}) => {

    let isLoggedIn = true;
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLoggedIn?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};
export default PrivateRoute;