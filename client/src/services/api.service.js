import Vue from "vue";
import axios from "axios"
import VueAxios from "vue-axios";
import { getToken } from "./jwt.service";

const BASE_URL = "http://localhost:3000/api";

function FormattedResponse({ data = null, error = null }) {
  return {
    data,
    error
  }
}

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
      .then(response => {
        return new FormattedResponse({data: response.data})
      })
      .catch(error => {
        return new FormattedResponse({error: error.response.data});
      })
  },

  login({ username, password }) {
    return Vue.axios.post("/login", {
      username,
      password
    })
    .then(response => {
      return new FormattedResponse({data: response.data});
    })
    .catch(error => {
      return new FormattedResponse({error: error.response.data});
      }
    )
  },

  registerUser({ username, password }) {
    return Vue.axios.post("/user/new", {
      username,
      password
    })
    .then(response => {
      return new FormattedResponse({data: response.data});
    })
    .catch(error => {
      return new FormattedResponse({error: error.response.data});
    })
  }
};

export default ApiService;