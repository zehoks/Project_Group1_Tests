import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from 'axios';
// установить для axios стандартный url
axios.defaults.baseURL = 'http://localhost:80'

Vue.config.productionTip = false;

// добавляем глобальный объект axios
Vue.prototype.$axios = axios

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
