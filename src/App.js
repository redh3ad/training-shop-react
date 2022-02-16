import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {
  HashRouter as Router,
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
  const globalEmail = 'admin@mail.com';
  const globalLogin = 'admin';
  const globalPassword = 'admin';

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  function authHandler(email, login, password) {
    if (
      email === globalEmail &&
      login === globalLogin &&
      password === globalPassword
    ) {
      setIsAuth(true);
      localStorage.setItem('auth', true);
    }
  }

  function logout() {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <Router>
      {isAuth ? (
        <div className="app__wrapper">
          <Navbar logout={logout} />
          <div className="app__content">
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
            element={<Login authHandler={authHandler} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
