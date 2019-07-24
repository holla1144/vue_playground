import Vue from "vue";

import ApiService from "./services/api.service";
import App from './App.vue';
import router from "./router";
import store from "./store";
import 'tachyons';

ApiService.init();

new Vue({
  store,
  router,
  el: '#root',
  render: h => h(App)
});
