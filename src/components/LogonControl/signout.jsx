import React from "react";

import "./styles.css";

import { Button } from "../Button";
import { TextField } from "../TextField";

export const FieldSetSignUp = ({ hasAccount, setHasAccount }) => {
    return (
      <div className="fieldset-container">
        <div className="fieldset-content">
          <div className="title">
            <h1>FAMILIA REBORN!</h1>
            <p>Preencha o formulário para criar sua conta.</p>
          </div>
          <TextField type="email" text="Email *" />
          <TextField type="password" text="Senha" />
          <TextField type="password" text="Confirme sua senha" />
          <Button
            text="Criar conta"
            disabled="True"
            style={{ margin: "2.3rem auto", cursor: "default" }}
          />
        </div>
        <div className="fieldset-footer">
          <p>Já possui uma conta?</p>
          <Button
            onClick={() => {
              setHasAccount(!hasAccount);
            }}
            text="Fazer Login"
            style={{
              margin: "-0.4rem auto",
              width: "12rem",
              backgroundColor: "#304FFE",
            }}
          />
        </div>
      </div>
    );
  };
  