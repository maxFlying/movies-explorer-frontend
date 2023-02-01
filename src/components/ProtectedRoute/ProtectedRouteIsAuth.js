import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRouteIsAuth = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        !props.isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRouteIsAuth;