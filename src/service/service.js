import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, password) => {
  let response = [];
  response['data'] = {'username':username,'password':password}
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data
};

const login = (username, password) => {
    let response = [];
    response['data'] = {'username':username,'password':password}
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};