import jwt_decode from "jwt-decode";

import { SAVE_COLLECTION, FETCH_COLLECTIONS } from "../actions.type";
import { GET_COLLECTION_BY_ID } from "../getters.type";
import { ADD_COLLECTION, SET_COLLECTIONS } from "../mutations.type";
import { getToken } from "../../services/jwt.service";
import apiService from "../../services/api.service";

export const namespaced = true;

export const state = {
  collections: []
};

export const getters = {
  [GET_COLLECTION_BY_ID]: state =>  collectionId => {
    return state.collections.filter(col => col.id === collectionId)[0];
  }
};

export const actions = {
  async [FETCH_COLLECTIONS](state) {
    const token = getToken();

    if (!token) {
      throw new Error("You must be logged in")
    }

    const { userId } = jwt_decode(token);
    const response = await apiService.getUser(userId);

    if (response.error) {
      throw new Error("Couldn't fetch collections")
    }

    state.commit(SET_COLLECTIONS, response.data.cardSets);
  },

  async [SAVE_COLLECTION]({ state, commit }, collection) {
    commit(ADD_COLLECTION, collection);
    const token = getToken();
    const { userId } = jwt_decode(token);

    const result = await apiService.updateUser(userId, { cardSets: state.collections });

    if (result.error) {
      throw new Error("Couldn't save collection");
    }

    state.commit(SET_COLLECTIONS, result.data.user.cardSets);
  }
};

export const mutations = {
  [SET_COLLECTIONS](state, collections) {
    state.collections = collections;
  },
  [ADD_COLLECTION](state, collection) {
    const existingCollections = state.collections.map(col => col.id);
    const collectionIndex = existingCollections.indexOf(collection.id);

    if (collectionIndex !== -1) {
      state.collections.splice(collectionIndex, 1, collection);
      return
    }

    state.collections.push(collection);
  }
};

export default {
  actions,
  getters,
  mutations,
  namespaced,
  state
}
