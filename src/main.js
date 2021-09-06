import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./registerServiceWorker";
import VueToast from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
