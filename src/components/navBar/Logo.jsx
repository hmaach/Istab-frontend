import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="logo_div">
    <NavLink to="/" className="logo">
      <img src="/Logo_ofppt.png" alt="logo" />
      <span className="ista">ISTA Berkane</span>
    </NavLink>
    <hr className="hr" />
  </div>
  )
}

export default Logo
