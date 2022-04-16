import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bp4-navbar .modifier">
      <div className="bp4-navbar-group bp4-align-left">
        <div className="bp4-navbar-heading">Harry Potter API</div>
      </div>
      <div className="bp4-navbar-group bp4-align-right">
        <NavLink to="/" className="bp4-button bp4-minimal bp4-icon-home">
          Home
        </NavLink>
        <NavLink to="/houses" className="bp4-button bp4-minimal bp4-icon-office">
          Houses
        </NavLink>
        <NavLink
          to="/characters"
          className="bp4-button bp4-minimal bp4-icon-people"
        >
          Characters
        </NavLink>
        <NavLink
          to="/ingredients"
          className="bp4-button bp4-minimal bp4-icon-group-objects"
        >
          Ingredients
        </NavLink>
        <NavLink to="/elixirs" className="bp4-button bp4-minimal bp4-icon-diagnosis">
          Elixirs
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
