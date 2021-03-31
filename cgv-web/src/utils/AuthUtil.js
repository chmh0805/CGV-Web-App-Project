import axios from "axios";
import { getCookie, setCookie } from "./JWT";

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
