import React from 'react'
import { Link } from 'react-router-dom'
import '../NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <h2>ProduceTrace</h2>
      <div className="nav-links">
        <Link to="/farmer">Farmer</Link>
        <Link to="/consumer">Consumer</Link>
      </div>
    </nav>
  )
}

export default NavBar
