import axios from "axios";

export const PublicRoute = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
});

export const PrivateRoute = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  headers: {
    Authorization: `Bearer ${JSON.parse(
      localStorage.getItem("@KenzieHub:token")
    )}`,
  },
});
