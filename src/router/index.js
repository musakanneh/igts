import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Services from "../views/Services";
import Work from "../views/Work";
import Team from "../views/Team";
import Store from "../views/Store";
import Contact from "../views/Contact";
import GetInvolved from "../views/GetInvolved";

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
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/store",
    name: "Store",
    component: Store
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/get-involved",
    name: "GetInvolved",
    component: GetInvolved
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
