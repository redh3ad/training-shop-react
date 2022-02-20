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
import Bag from './components/Bag/Bag';
import Login from './components/Login/Login';
import { useState, useEffect } from 'react';
import Product from './components/Shop/Product/Product';
import uniqid from 'uniqid';

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

  const [activePage, setActivePage] = useState([
    { name: 'home', isActive: true },
    { name: 'shop', isActive: false },
    { name: 'bag', isActive: false },
  ]);

  function handlerActivePage(e) {
    const data = e.target.getAttribute('data-name');
    setActivePage(
      activePage.map((page) => {
        if (page.name === data) {
          return {
            ...page,
            isActive: true,
          };
        } else {
          return {
            ...page,
            isActive: false,
          };
        }
      }),
    );
  }

  const [purchases, setPurchases] = useState([
    {
      id: uniqid(),
      src: '/assets/dell-xps-13-white.png',
      alt: 'notebook dell xps 13 white',
      size: true,
    },
    {
      id: uniqid(),
      src: '/assets/apple-iphone-12-pro-blue.png',
      alt: 'iphone 12 pro blue',
      size: false,
    },
    {
      id: uniqid(),
      src: '/assets/apple-iphone-12-white.png',
      alt: 'iphone 12 white',
      size: false,
    },
    {
      id: uniqid(),
      src: '/assets/apple-iphone-12-black.png',
      alt: 'iphone 12 black',
      size: false,
    },
  ]);

  return (
    <Router>
      {isAuth ? (
        <div className="app__wrapper">
          <Navbar
            logout={logout}
            activePage={activePage}
            handlerActivePage={handlerActivePage}
          />
          <div className="app__content">
            <div>
              <div className="bg"></div>
              <div className="bg bg2"></div>
              <div className="bg bg3"></div>
            </div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route
                path="/shop"
                element={
                  <Shop
                    handlerActivePage={handlerActivePage}
                    purchases={purchases}
                    setPurchases={setPurchases}
                  />
                }
              >
                <Route
                  path=":id"
                  element={<Product setPurchases={setPurchases} />}
                />
              </Route>
              <Route
                path="/bag"
                element={
                  <Bag purchases={purchases} setPurchases={setPurchases} />
                }
              />
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
