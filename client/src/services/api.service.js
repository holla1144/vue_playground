import Vue from "vue";
import axios from "axios"
import VueAxios from "vue-axios";
import { getToken } from "./jwt.service";

const BASE_URL = "http://localhost:3000/api";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = BASE_URL;
  },

  setHeaders() {
    Vue.axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
  },

  getUser(userId) {
    return Vue.axios.get(`/user/${userId}`)
  },

  login({ username, password }) {
    return Vue.axios.post("login", {
      username,
      password
    })
  },

  registerUser({ username, password }) {
    return Vue.axios.post("user/new", {
      username,
      password
    })
  }
};

export default ApiService;