import React from 'react'
import { Link } from 'react-router-dom'
import st from './Navbar.module.scss'

const Navbar = ({logout}) => {
  return (
    <aside className={st.aside__container}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login" onClick={logout}>Logout</Link>
    </aside>
  ) 
}

export default Navbar