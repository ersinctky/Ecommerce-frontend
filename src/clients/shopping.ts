import axios from "axios";

export const shopping = axios.create({ baseURL: "http://localhost:5000" });
