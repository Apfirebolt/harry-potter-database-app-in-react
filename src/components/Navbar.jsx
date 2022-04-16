import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bp4-navbar .modifier">
      <div className="bp4-navbar-group bp4-align-left">
        <div className="bp4-navbar-heading">Blueprint</div>
      </div>
      <div className="bp4-navbar-group bp4-align-right">
        <NavLink to="/" className="bp4-button bp4-minimal bp4-icon-home">
          Home
        </NavLink>
        <NavLink to="/houses" className="bp4-button bp4-minimal bp4-icon-home">
          Houses
        </NavLink>
        <NavLink
          to="/characters"
          className="bp4-button bp4-minimal bp4-icon-home"
        >
          Characters
        </NavLink>
        <NavLink
          to="/ingredients"
          className="bp4-button bp4-minimal bp4-icon-home"
        >
          Ingredients
        </NavLink>
        <NavLink to="/elixirs" className="bp4-button bp4-minimal bp4-icon-home">
          Elixirs
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
