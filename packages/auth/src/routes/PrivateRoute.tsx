import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

import { RouteProps } from './_types';

const PrivateRoute: React.FC<RouteProps> = ({ children, component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);

  const render = () => {
    return authenticated ? (
      <Route {...rest} component={component}>
        {children}
      </Route>
    ) : (
      <Redirect to="/login" />
    );
  };

  return render();
};

export default PrivateRoute;
