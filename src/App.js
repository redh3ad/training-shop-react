import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import { useState, useEffect } from 'react';
import Product from './components/Shop/Product/Product';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [form, setForm] = useState({
    login: '',
    password: '',
  });
  const globalLogin = 'admin';
  const globalPassword = 'admin';

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    if (localStorage.getItem('login')) {
      const login = localStorage.getItem('login');
      setForm((prevForm) => {
        return { ...prevForm, login: login };
      });
    }
    if (localStorage.getItem('password')) {
      const password = localStorage.getItem('password');
      setForm((prevForm) => {
        return { ...prevForm, password: password };
      });
    }
  }, []);

  function login() {
    if (form.login === globalLogin && form.password === globalPassword) {
      setIsAuth(true);
      localStorage.setItem('auth', isAuth);
      localStorage.setItem('login', globalLogin);
      localStorage.setItem('password', globalPassword);
    } else {
      alert('wrong login or password, try again');
    }
  }

  function handleForm(e) {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  }

  function logout() {
    setIsAuth(false);
    localStorage.removeItem('auth');
    localStorage.removeItem('login');
    localStorage.removeItem('password');
  }

  return (
    <Router>
      {isAuth ? (
        <div>
          <Navbar logout={logout} />
          <div className="app__wrapper">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />}>
                <Route path=":id" element={<Product />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <Login login={login} form={form} handleForm={handleForm} />
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
