import React, { useState, useEffect } from 'react';

const Login = ({ authHandler }) => {
  // Form Values
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  // Form Dirties
  const [emailDirty, setEmailDirty] = useState(false);
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  // Form Errors
  const [emailError, setEmailError] = useState('Email cannot be empty');
  const [loginError, setLoginError] = useState('Login cannot be empty');
  const [passwordError, setPasswordError] = useState(
    'Password cannot be empty',
  );
  // Form Valid
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || loginError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, loginError, passwordError]);

  // Form Handler
  function formHandler(e) {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
      const re =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (!re.test(String(value).toLocaleLowerCase())) {
        setEmailError('Incorrect email');
        if (!value) {
          setEmailError('Email cannot be empty');
        }
      } else {
        setEmailError('');
      }
    }
    if (name === 'login') {
      setLogin(value);
      if (value.length < 3 || value.length > 8) {
        setLoginError('Login must be longer than 3 and less than 8 characters');
        if (!value) {
          setLoginError('Login cannot be empty');
        }
      } else {
        setLoginError('');
      }
    }
    if (name === 'password') {
      setPassword(value);
      if (value.length < 3 || value.length > 10) {
        setPasswordError(
          'Password must be longer than 3 and less than 10 characters',
        );
        if (!value) {
          setPasswordError('Password cannot be empty');
        }
      } else {
        setPasswordError('');
      }
    }
  }

  function blurHandler(e) {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'login':
        setLoginDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  }

  function submitForm(e) {
    e.preventDefault();
    authHandler(email, login, password);
  }

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <h1>Login</h1>
      {emailDirty && emailError && (
        <div style={{ color: 'red' }}>{emailError}</div>
      )}
      <input
        onBlur={(e) => blurHandler(e)}
        name="email"
        type="text"
        onChange={(e) => formHandler(e)}
        value={email}
        placeholder="Email"
      />
      {loginDirty && loginError && (
        <div style={{ color: 'red' }}>{loginError}</div>
      )}
      <input
        onBlur={(e) => blurHandler(e)}
        name="login"
        type="text"
        onChange={(e) => formHandler(e)}
        value={login}
        placeholder="Login"
      />
      {passwordDirty && passwordError && (
        <div style={{ color: 'red' }}>{passwordError}</div>
      )}
      <input
        onBlur={(e) => blurHandler(e)}
        name="password"
        type="password"
        onChange={(e) => formHandler(e)}
        value={password}
        placeholder="Password"
      />
      <button type="submit" disabled={!formValid}>
        Login
      </button>
    </form>
  );
};

export default Login;
