import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <NavLink to = {"/"} className={({isActive})=> (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
    </nav>
  )
}

export default Nav