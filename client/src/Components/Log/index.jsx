import React, { useState } from "react";
import SignUpForm from "./signUpForm.jsx";
import SignInForm from "./signInForm.jsx";
const Log = (props) => {
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [signInModal, setSignInModal] = useState(props.signin);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            // si signupModal est true on met la className active-bnt sinon on met rien
            className={signUpModal ? "active-btn" : null}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={signInModal ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>
        {/* si signUpModal est true on affiche signupform */}
        {signUpModal && <SignUpForm />}
        {/* si signInModal est true on affiche signInform */}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Log;
