import Vue from 'vue';
import hello from './hello.vue';

new Vue({
  el: '#root',
  render: h => h(hello),
});