import "./styles.css";

import { Button } from "../Button";
import { TextField } from "../TextField";

export const FieldSet = () => {
  return (
    <div className="fieldset-container">
      <div className="fieldset-content">
        <div className="title">
          <h1>FAMILIA REBORN!</h1>
          <p>
            Os maiores personagens do <span>enário</span>.
          </p>
        </div>
        <TextField type="email" text="Email *" />
        <TextField type="password" text="Senha" />
        <div className="btn-forgetpassword">
          <p>Esqueceu sua senha?</p>
        </div>
        <Button text="Entrar" margin="4rem 0 0 0" backgroundColor="#304FFE" />
      </div>
      <div className="fieldset-footer">
        <p>Ainda não tem uma conta?</p>
        <Button
          text="Cadastre-se"
          backgroundColor="#28A745"
          width="11rem"
          margin="0 auto"
        />
      </div>
    </div>
  );
};
