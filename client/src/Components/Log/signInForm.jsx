import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      // dans notre back notre methode pour se log attend email et password, donc dans data, quand on ecrit email, c'est comme
      // si on écrivait email:email, cad quon passe la valeur de email à email ( la valeur du state)
      data: {
        email,
        password,
      },
    })
      // Ensuite on va traiter ces données
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          // si on reçois des erreurs dans la réponse
          // on injecte res.data.errors.email dans email error
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          // on est considéré comme connectés
          window.location = "/members";
        }
      })
      .catch((err) => {
        // si qqch ne va pas dans notre requete on se fait un catch avec l'erreur
        console.log(err);
      });
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        // id pour lier à htmlFor email
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      {/* div vide qui sera remplie avec innerHTML en cas d'erreur d'email */}
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {/* div vide qui sera remplie avec innerHTML en cas d'erreur de password */}
      <div className="password error"></div>
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;
