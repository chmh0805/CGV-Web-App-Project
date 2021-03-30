import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "./JWT";

export function isUser() {
  return getCookie("role") === "USER";
}

export function isAdmin() {
  return getCookie("role") === "ADMIN";
}

export function setRole(id) {
  axios
    .get("http://localhost:8080/auth/role/" + id)
    .then((res) => {
      if (res.data.statusCode === 1) {
        setCookie("role", res.data.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function logout() {
  fetch("http://localhost:8080/logout").then(() => {
    deleteCookie("cgvJWT");
    deleteCookie("userId");
    deleteCookie("role");
    window.location.replace("/");
  });
}
