import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Services from "../views/Services";
import Work from "../views/Work";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  },
  {
    path: "/work",
    name: "Work",
    component: Work
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
