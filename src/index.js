import Vue from "vue";
import App from './App.vue';
import store from "./store";
import 'tachyons';

new Vue({
  store,
  el: '#root',
  render: h => h(App)
});
