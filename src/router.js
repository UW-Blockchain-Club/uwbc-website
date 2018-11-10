import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AppHeader from "./layout/AppHeader.vue";
import AppFooter from "./layout/AppFooter.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/uwbc/",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    }
  ]
});
