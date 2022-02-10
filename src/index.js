import Vue from "vue";

import "firebaseui/dist/firebaseui.css";

import App from "./components/App";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
