import Vue from "vue";
import Vuex from "vuex";

import auth from "./Auth/auth.module";
import editor from "./Editor/editor.module";
import collection from "./Collection/collection.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    collection,
    editor
  }
});

export default store;
