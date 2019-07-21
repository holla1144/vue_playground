import Vue from "vue";

import ApiService from "./services/api.service";
import App from './App.vue';
import { CHECK_AUTH } from "./store/actions.type";
import router from "./router";
import store from "./store";
import 'tachyons';

ApiService.init();

router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(`auth/${CHECK_AUTH}`)]).then(next)
);

new Vue({
  store,
  router,
  el: '#root',
  render: h => h(App)
});
