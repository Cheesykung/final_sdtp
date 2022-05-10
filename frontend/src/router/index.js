import { createWebHistory, createRouter } from "vue-router";

import DetailScreen from "../components/detailScreen.vue";
import Reserve from "../components/HelloWorld.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: DetailScreen,
  },
  {
    path: "/reserve",
    name: "Reserve",
    component: Reserve,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;