import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <main className="nav-wrapper">
      <div className="inner-nav-wrapper">
        <div className="nav-left">
          <NavLink exact to="/">
            The Verse | AiB
          </NavLink>
        </div>
        <div className="nav-right">
          <NavLink exact to="/">
            About
          </NavLink>
          <NavLink exact to="/games">
            Games
          </NavLink>
          <NavLink exact to="/">
            Humzzz
          </NavLink>
          <NavLink exact to="/">
            Search
          </NavLink>
          {isLoaded && <ProfileButton user={sessionUser} />}
        </div>
      </div>
    </main>
 
  );
}

export default Navigation;
