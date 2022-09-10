import React, { useState } from "react";

import "./styles.css";

import { Button } from "../Button";
import { TextField } from "../TextField";
import { useAuth } from "../../contexts/Auth/useAuth";
import { useNavigate } from "react-router-dom";

export const FieldSetSignIn = ({ hasAccount, setHasAccount }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const auth = useAuth();

  async function handleLogin(){
    try {
        await auth.signin(email, password);
        navigate('/private')
    } catch (error) {
        alert("Invalid email or password")
    }
  };


  return (
    <div className="fieldset-container">
      <div className="fieldset-content">
        <div className="title">
          <h1>FAMILIA REBORN!</h1>
          <p>
            Os maiores personagens do <span>enário</span>.
          </p>
        </div>
        <TextField type="email" text="Email *" onChange={(e) => setEmail(e.target.value)} />
        <TextField type="password" text="Senha" onChange={(e) => setPassword(e.target.value)} />
        <div className="btn-forgetpassword">
          <p>Esqueceu sua senha?</p>
        </div>
        <Button text="Entrar" onClick={handleLogin} />
      </div>
      <div className="fieldset-footer">
        <p>Ainda não tem uma conta?</p>
        <Button
          text="Cadastre-se"
          onClick={() => {
            setHasAccount(!hasAccount);
          }}
          style={{
            backgroundColor: "#28a745",
            width: "12rem",
            margin: "-0.4rem auto",
          }}
        />
      </div>
    </div>
  );
};

