import React from 'react';

const Login = ({ login, form, handleForm }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Login</h1>
      <input
        name="login"
        type="text"
        onChange={handleForm}
        value={form.login}
        placeholder="Login"
      />
      <input
        name="password"
        type="password"
        onChange={handleForm}
        value={form.password}
        placeholder="Password"
      />
      <button onClick={login}>Login</button>
    </form>
  );
};

export default Login;
