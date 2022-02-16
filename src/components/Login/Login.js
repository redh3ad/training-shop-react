import React, { useState, useEffect } from 'react';
import st from './Login.module.scss';

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
    <div className={st.login__page}>
      <div>
        <div className={st.bg}></div>
        <div className={`${st.bg} ${st.bg2}`}></div>
        <div className={`${st.bg} ${st.bg3}`}></div>
      </div>
      <form className={st.login__form} onSubmit={(e) => submitForm(e)}>
        <h1>Sign in</h1>
        {emailDirty && emailError && (
          <div className={st.input__errors}>{emailError}</div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          name="email"
          type="text"
          onChange={(e) => formHandler(e)}
          value={email}
          placeholder="Email: admin@mail.com"
        />
        {loginDirty && loginError && (
          <div className={st.input__errors}>{loginError}</div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          name="login"
          type="text"
          onChange={(e) => formHandler(e)}
          value={login}
          placeholder="Login: admin"
        />
        {passwordDirty && passwordError && (
          <div className={st.input__errors}>{passwordError}</div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          name="password"
          type="password"
          onChange={(e) => formHandler(e)}
          value={password}
          placeholder="Password: admin"
        />
        <button type="submit" disabled={!formValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
