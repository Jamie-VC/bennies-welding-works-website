import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
       <Link to="/"> Home </Link>
       <Link to="/cranehire"> Crane Hire </Link>
       <Link to="/about"> About </Link>
       <Link to="/contact"> Contact </Link>
    </div>
  )
}

export default Navbar
