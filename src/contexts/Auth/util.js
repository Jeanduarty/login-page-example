import { Api } from "../../services/api";
import { useAuth } from "./useAuth";

export function setTokenLocalStorage(token) {
  localStorage.setItem("u", JSON.stringify(token));
}

export function getTokenLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) return null;

  const token = JSON.parse(json);
  return token;
}

export async function LoginRequest(email, password) {
  try {
    const request = await Api.post("login", { email, password });
    return request.data;
  } catch (error) {
    return null;
  }
}

export function RequireAuth({ children }) {
  const auth = useAuth();
  if (!auth.email) {
    alert("You don't have access!")
    return window.location.href = '/'
  }

  return children;
}
