import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../components/PageNotFound.vue";

import Search from "../components/Search.vue";
const ShowDetail = () => import("../components/ShowDetail.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "not-found",
    component: PageNotFound
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/search/:query",
    name: "Search",
    component: Search
  },
  {
    path: "/shows/:id",
    name: "ShowDetail",
    props: true,
    component: ShowDetail
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
