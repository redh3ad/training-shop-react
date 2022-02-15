import React from 'react'
import { Link } from 'react-router-dom'
import st from './Navbar.module.scss'

const Navbar = () => {
  return (
    <aside className={st.aside__container}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/auth">Logout</Link>
    </aside>
  ) 
}

export default Navbar