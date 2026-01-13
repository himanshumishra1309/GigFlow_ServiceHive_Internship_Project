import axios from "axios";

const API_URL = "http://localhost:8000/api";

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (email, password) => {
  const response = await apiClient.post("/auth/login", { email, password });
  if (response.data.data.accessToken) {
    localStorage.setItem("accessToken", response.data.data.accessToken);
    localStorage.setItem("userInfo", JSON.stringify(response.data.data.user));
  }
  return response.data;
};

// export const register = async (name, email, username, contact_no, password) => {
//   const response = await apiClient.post("/auth/register", {name, email, username, contact_no, password})
//   if(response.data.data)
// }