import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "bulma-divider/dist/css/bulma-divider.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faFacebookMessenger,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebookF, faFacebookMessenger, faLinkedinIn);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
