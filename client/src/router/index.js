import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  { path: "/blog",
    name: "blog",
    component: () => import("../views/Blog.vue")
  },
  { path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue")
  },
  { path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/collection/:routeName",
    name: "editor",
    component: () => import("../views/Editor.vue")
  }
];

const Router = new VueRouter({
  routes
});

export default Router;