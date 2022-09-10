import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";

import "./styles.css";

export const Private = () => {
  const auth = useContext(AuthContext);
  alert("Privado success");

  const handleClick = () => {
    auth.signout();
    return <Navigate to="/" />;
  };

  return (
    <div className="container-page-private">
      <h1
        style={{ textAlign: "center", fontSize: "4.5rem", fontFamily: "Genos" }}
      >
        Pagina privada!!
      </h1>
      <button onClick={handleClick} className="button-page-private">
        Logout
      </button>
      <a
        className="github-button"
        href="https://github.com/Jeanduarty/login-page-example"
        target="_blank"
        without
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  );
};
