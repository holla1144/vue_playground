import jwt_decode from "jwt-decode";
import { CLEAR_ERROR, CHECK_AUTH, LOGIN, LOGOUT, REGISTER } from "./actions.type";
import { REMOVE_AUTH, SET_AUTH, SET_ERROR } from "./mutations.type";
import apiService from "../services/api.service";
import { deleteToken, getToken, setToken } from "../services/jwt.service";

const namespaced = true;

const state = {
  errors: null,
  isAuthenticated: !!getToken(),
  user: {
    id: "",
    username: ""
  }
};

const getters = {

};

const actions = {
  [CLEAR_ERROR](state) {
    state.commit(SET_ERROR, "");
  },

  async [CHECK_AUTH](state) {
    const token = getToken();

    if (token) {
      apiService.setHeaders(token);
      const userId = jwt_decode(token).userId;
      let response;

      try {
        response = await apiService.getUser(userId);
      } catch(e) {
        state.commit(REMOVE_AUTH);
        state.commit(SET_ERROR, e.response.data.message);
        return
      }

      const user = response.data;
      state.commit(SET_AUTH, { token, user });
    }

    state.commit(REMOVE_AUTH);
  },

  async [LOGIN](state, { username, password }) {
    let response;

    try {
      response = await apiService.login( { username, password } )
    } catch(e) {
      state.commit(REMOVE_AUTH);
      state.commit(SET_ERROR, e.response.data.message);
      return
    }

    const { token, user } = response.data;
    state.commit(SET_AUTH, { token, user });
  },

  [LOGOUT](state) {
    state.commit(REMOVE_AUTH);
  },

  async [REGISTER](state, {username, password}) {
    let response;

    try {
      response = await apiService.registerUser({ username, password })
    } catch(e) {
      state.commit(REMOVE_AUTH);
      state.commit(SET_ERROR, e.response.data.message);
      return
    }

    const { token, user } = response.data;
    state.commit(SET_AUTH, { token, user });
  }
};

const mutations = {
  [REMOVE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {
      id: "",
      username: ""
    };
    deleteToken();
  },
  [SET_ERROR](state, errorMessage) {
    state.errors = errorMessage;
  },
  [SET_AUTH](state, { token, user }) {
    state.errors = null;
    state.isAuthenticated = true;
    state.user = {
      id: user._id,
      username: user.username
    };

    setToken(token);
  },
};

export default {
  actions,
  getters,
  mutations,
  namespaced,
  state
}
