import React from 'react';

const Login = ({ login }) => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
