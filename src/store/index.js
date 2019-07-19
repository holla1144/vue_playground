import Vue from "vue";
import Vuex from "vuex";

import collectionEditor from "./collectionEditorModule";
import mutations from "./root/mutations";
import createCollections from "../dummyData";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    collections: createCollections()
  },
  mutations,
  modules: {
    collectionEditor
  }
});

export default store;
