import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Show from "./views/Show.vue";
import EditItem from "./views/Edit.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/show",
      name: "show",
      component: Show
    },
    {
      path: "/edit/:id",
      name: "EditItem",
      component: EditItem
    }
  ]
});
