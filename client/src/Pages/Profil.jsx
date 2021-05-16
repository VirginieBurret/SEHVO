import React, { useContext } from "react";
import Log from "../Components/Log/index";
import { UidContext } from "../Contextes/AppContext";

const Profil = () => {
  const uid = useContext(UidContext);
  // notre variable uid aura l'id de l'utilisateur s'il est conecté
  // on pourra s'en servir pour afficher la page de conection s'il n'est pas  connecté ou afficher la page de modification
  // de profil s'il n'est pas conecté.  il sera true s'il a l'id.
  return (
    <div className="profil-page">
      {uid ? (
        <h1>UPDATE PROFILE</h1>
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="./img/log.svg" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
