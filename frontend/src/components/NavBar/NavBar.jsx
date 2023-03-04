import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import SignupButton from "../SignUpButton/SignupButton";
import AppLogo from "../AppLogo/AppLogo";
import HomeButton from "../HomeButton/HomeButton";
import SavedButton from "../SavedButton/SavedButton";
import './NavBar.css';
import ProfileButton from "../ProfileButton/ProfileButton";
import UserAvatar from "../UserAvatar/UserAvatar";


const NavBar = () => {

  return (
    <nav>
      <div class="logo">
        <AppLogo />
      </div>
      <div class="navigation">
        <HomeButton />
      </div>
      <div class="navigation">
        <SavedButton />
      </div>
      <div class="navigation">
        <ProfileButton />
      </div>
      <div class="navigation">
        <UserAvatar />
        <div>
          <LoginButton />
          <SignupButton />
        </div>
      </div>
    </nav>

  )
};

export default NavBar;
