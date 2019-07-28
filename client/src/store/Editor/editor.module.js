import Card from "../../classes/Card";
import { SET_EDIT_COLLECTION } from "../actions.type";

import {
  ADD_CARD,
  REMOVE_CARD,
  SET_COLLECTION,
  UPDATE_CARD,
  UPDATE_COLLECTION
} from "../mutations.type";

export const namespaced = true;

export const state = {
  collection: undefined
};

export const actions = {
  [SET_EDIT_COLLECTION](state, collection) {
    state.commit(SET_COLLECTION, collection);
  }
};

export const mutations = {
  [ADD_CARD](state) {
    state.collection.addCard(new Card());
  },

  [REMOVE_CARD](state, index) {
    state.collection.cards.splice(index, 1);
  },

  [SET_COLLECTION](state, newCollection) {
    state.collection = newCollection
  },

  [UPDATE_CARD](state, { cardIndex, field, value }) {
    state.collection.cards[cardIndex][field] = value;
  },

  [UPDATE_COLLECTION](state, field) {
    state.collection = Object.assign(state.collection, field);
  }
};

export default {
  state,
  actions,
  mutations,
  namespaced
}
