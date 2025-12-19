import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-cms-backend-new.onrender.com/api",
});

export default API;
