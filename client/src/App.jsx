import React, { useState, useEffect } from "react";
import { UidContext } from "./Contextes/AppContext";
import "./App.css";
import Routes from "./Routes";
import axios from "axios";

const App = () => {
  const [uid, setUid] = useState(null);

  // chaque fois que app va se lancer :
  useEffect(() => {
    const fetchToken = async () => {
      //console.log("JE RENTRE DANS FETCH");
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
          //console.log("RESPONSE", res);
          //on set uid avec res.data qui contient l'id de notre utilisateur
        })
        // la c est que l utilisateur n est pas conecté
        .catch((err) => console.log("No token"));
    };
    fetchToken();
  }, [uid]);

  return (
    // dans notre contexte on a la value de uid, cad que n'importe où dans notre app ä chaque fois quon appellera
    // notre contexte on pourra avoir accès à l'id de notre utilisateur
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
