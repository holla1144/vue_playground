import Vue from "vue";
import Vuex from "vuex";

import auth from "./Auth/auth.module";
import collectionEditor from "./editor.module";
import createCollections from "../dummyData";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    collections: createCollections()
  },
  mutations: {
    addCollection(state, collection) {
      state.collections.push(collection)
    }
  },
  modules: {
    auth,
    collectionEditor
  }
});

export default store;
