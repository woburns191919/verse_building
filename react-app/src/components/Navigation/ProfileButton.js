import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "inherit",
    cursor: "pointer",
    fontSize: "24px",
  };

  const ulStyle = {
    display: showMenu ? "block" : "none",
    position: "absolute",
    top: "40px",
    right: "0",
    backgroundColor: "#fff",
    color: "#333",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    borderRadius: "5px",
    zIndex: "1000",
  };

  const liStyle = {
    padding: "10px 20px",
    listStyleType: "none",
  };


  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button onClick={openMenu} style={buttonStyle}>
        <i className="fas fa-user-circle" />
      </button>
      <ul className={ulClassName} ref={ulRef} style={ulStyle}>
        {user ? (
          <>
            <li style={liStyle}>{user.username}</li>
            <li style={liStyle}>{user.email}</li>
            <li style={liStyle}>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
