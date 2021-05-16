import React, { useContext } from "react";
//import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "../../Contextes/AppContext";
import LogOut from "../Log/logOut";
import "./membersNavBar.scss";

const Navbar = ({ button }) => {
  const uid = useContext(UidContext);
  // const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="membersNavbar">
        {uid ? (
          <>
            <NavLink exact to="/profil">
              <div className="welcome">
                <h1>Bienvenue USER</h1>
              </div>
            </NavLink>
            <div className="links">
              <NavLink exact to="/members">
                <p className="link">Accueil Espace membre</p>
              </NavLink>
              <NavLink exact to="/profil">
                <p className="link">Profil</p>
              </NavLink>
            </div>

            <div className="actionBtn">
              <LogOut />
              <NavLink exact to="/">
                <p>Retour à l'accueil du site</p>
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div className="welcome">
              <h1>Bienvenue sur l'espace membre</h1>
            </div>
            <div className="links">
              <NavLink exact to="/members">
                <p className="link">Accueil Espace membre</p>
              </NavLink>
            </div>
            <div className="actionBtn">
              <NavLink exact to="/profil">
                <button>CONNEXION</button>
              </NavLink>

              <NavLink exact to="/">
                <p>Retour à l'accueil du site</p>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
