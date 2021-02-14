import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './js/slider.js'

// animation library
import 'animate.css';
import VueTextTransition from 'vue-text-transition';
Vue.component('vue-text-transition', VueTextTransition)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
