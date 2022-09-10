import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";

export const Private = () => {
  const auth = useContext(AuthContext);
  alert("Privado success")
  const handleClick = () => {
    auth.signout();
  };

  return (
    <div>
      <h1>Consegui acessar Pagina privada</h1>
      <button onClick={handleClick}>Logout</button>
      <Link to="/"> Voltar para o home</Link>
    </div>
  );
};
