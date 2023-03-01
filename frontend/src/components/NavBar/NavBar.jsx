import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import SignupButton from "../SignUpButton/SignupButton";
import AppLogo from "../AppLogo/AppLogo";
import HomeButton from "../HomeButton/HomeButton";

const NavBar = () => {
  return (
    <div>
      <div>
        <AppLogo />
      </div>
      <div>
        <LoginButton />
        <SignupButton />
        <HomeButton />
      </div>
    </div>

  )
}

export default NavBar;
