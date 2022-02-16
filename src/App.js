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

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  function login() {
    setIsAuth(true);
    localStorage.setItem('auth', true);
  }

  function logout() {
    setIsAuth(false);
    localStorage.removeItem('auth');
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
          <Route exact path="/login" element={<Login login={login} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
