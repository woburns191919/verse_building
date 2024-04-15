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
        </div>
      </div>
    </main>
    // <ul>
    // 	<li>
    // 		<NavLink exact to="/">Home!</NavLink>
    // 	</li>
    // 	{isLoaded && (
    // 		<li>
    // 			<ProfileButton user={sessionUser} />
    // 		</li>
    // 	)}
    // </ul>
  );
}

export default Navigation;
