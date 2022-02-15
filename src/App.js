import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/Index/Index';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Logout from './components/Logout/Logout';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app__wrapper">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
