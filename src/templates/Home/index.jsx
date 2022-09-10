import React from "react";

import "./styles.css";

import { FieldSetSignIn } from "../../components/LogonControl/signin";
import { Background } from "../../components/Background";
import { FieldSetSignUp } from "../../components/LogonControl/signout";
import { useState } from "react";

export const Home = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <div className="main-container">
      <Background />
      {hasAccount && (
        <FieldSetSignIn hasAccount={hasAccount} setHasAccount={setHasAccount} />
      )}
      {!hasAccount && (
        <FieldSetSignUp hasAccount={hasAccount} setHasAccount={setHasAccount} />
      )}
    </div>
  );
};
