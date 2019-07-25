import jwt_decode from "jwt-decode";
import { CLEAR_ERROR, CHECK_AUTH, LOGIN, LOGOUT, REGISTER } from "../actions.type";
import { REMOVE_AUTH, SET_AUTH, SET_ERROR } from "../mutations.type";
import apiService from "../../services/api.service";
import { deleteToken, getToken, setToken } from "../../services/jwt.service";

const namespaced = true;
export const initialState = () => ({
  errors: null,
  isAuthenticated: !!getToken(),
  user: {
    id: "",
    username: ""
  }
});

const state = initialState();

const getters = {

};

export const actions = {
  [CLEAR_ERROR](state) {
    state.commit(SET_ERROR, "");
  },

  async [CHECK_AUTH](state) {
    const token = getToken();

    if (token) {
      apiService.setHeaders(token);
      const userId = jwt_decode(token).userId;

      const attemptRetrieveUser = await apiService.getUser(userId);
      const { error, data } = attemptRetrieveUser;

      if (error) {
        state.commit(REMOVE_AUTH);
        state.commit(SET_ERROR, error.message);
        return
      }

      state.commit(SET_AUTH, { token, user: data });
      return
    }

    state.commit(REMOVE_AUTH);
  },

  async [LOGIN](state, { username, password }) {
    const loginAttempt = await apiService.login( { username, password } );
    const { error, data } = loginAttempt;

    if (error) {
      state.commit(REMOVE_AUTH);
      state.commit(SET_ERROR, error.message);
      return
    }

    const { token, user } = data;
    state.commit(SET_AUTH, { token, user });
  },

  [LOGOUT](state) {
    state.commit(REMOVE_AUTH);
  },

  async [REGISTER](state, {username, password}) {
    const registrationAttempt = await apiService.registerUser({ username, password });
    const { error, data } = registrationAttempt;

    if (error) {
      state.commit(REMOVE_AUTH);
      state.commit(SET_ERROR, error.message);
      return
    }

    const { token, user } = data;
    state.commit(SET_AUTH, { token, user });
  }
};

export const mutations = {
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
