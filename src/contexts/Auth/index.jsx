import React from "react";

import { createContext, useState } from "react";
import {  getTokenLocalStorage, LoginRequest, setTokenLocalStorage, } from "./util";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const tokenUser = getTokenLocalStorage();
  const [user, setUser] = useState(tokenUser);

  async function signin(email, password) {
    const response = await LoginRequest(email, password);
    const payload = { token: response.token, email };

    setUser(payload);
    setTokenLocalStorage(payload);
  }

  function signout() {
    setUser(null);
    setTokenLocalStorage(null);
    return 
  }

  return (
    <AuthContext.Provider value={{ ...user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
