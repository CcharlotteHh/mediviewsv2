import { NavLink, Outlet } from "react-router-dom";

import React from 'react'

function Nav() {
  return (
    <nav>
       <NavLink className="navLink" to="/">Home</NavLink>
        <NavLink className="navLink" to="about">About</NavLink>
    </nav>
  )
}

export default Nav
