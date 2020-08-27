import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const defaultTitle = "Beer-Daisuki";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/beer",
    name: "Beer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Beer.vue"),
    meta: {
      title: "Beer",
      requiresAuth: true,
    },
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../views/Map.vue"),
    meta: {
      title: "Map",
      requiresAuth: true,
    },
  },
  {
    path: "/temp",
    name: "Temp",
    component: () => import("../views/Temp.vue"),
    meta: {
      title: "Admin",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
    meta: {
      title: "Sign Up",
    },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/SignIn.vue"),
    meta: {
      title: "Sign In",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters["user/getUsername"] === null) {
      alert("로그인이 필요합니다.");
      next("/signin");
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = `${to.meta.title} | ${defaultTitle}`;
  });
});

export default router;
