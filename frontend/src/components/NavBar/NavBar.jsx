import React from "react";
import { Nav } from './NavBar.styles.js';
import Spoon from '../../assets/Spoon.png'
import { NavLink } from "react-router-dom";


const NavBar = () => {

  return (
    <Nav>
      <div>
        <img className="logo" src={Spoon} alt="spoon app logo"></img>
      </div>
      <div className="navigation">
        <NavLink to='/home' activeclassname='active'>Home</NavLink>
        <NavLink to='/search'>Search</NavLink>
        <NavLink to='/saved'>Saved</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/signup'>SignUp</NavLink>
      </div>
    </Nav>

  )
};

export default NavBar;
