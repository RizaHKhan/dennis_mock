import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (store.getters.isLoggedIn) next();
    next({ name: "Login" });
  }

  if (!to.meta.auth) {
    if (store.getters.isLoggedIn) next({ name: "Home" });
    if (to.name !== "Login") next({ name: "Login" });
    next();
  }
});

export default router;
