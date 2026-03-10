import axios from "axios";

const API = axios.create({
  baseURL: "https://dev.codeleap.co.uk/careers/",
});

export default API;
