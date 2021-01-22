import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../../providers/AuthProvider';



const Login: React.FC = ({ redirectWhenSignIn, history }) => {
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (authenticated) history.push(redirectWhenSignIn);
  }, [authenticated]);

  return (
    <LoginContainer>
      <Logo />

      <Paper>
        <LoginForm />
      </Paper>
    </LoginContainer>
  );
};

export default Login;
