import{ useState} from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };


  return (
    <main className="nav-wrapper">
      <div className="inner-nav-wrapper">
        <div className="nav-left">
          <NavLink exact to="/">
            The Verse
          </NavLink>
          <img src="../Tv_logo.png" />
          <NavLink exact to="/">
            AiB
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
            Contact
          </NavLink>
          <NavLink to="#" onClick={toggleSearch}>
            Search
          </NavLink>
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          )}
          {isLoaded && <ProfileButton user={sessionUser} />}
        </div>
      </div>
    </main>

  );
}

export default Navigation;
