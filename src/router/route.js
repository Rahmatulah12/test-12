import Vue from 'vue';
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});

const Categories = () => import("@/view/Categories");


function configRoutes(){
    return [
        {
            path: "/",
            redirect: "/categories",
            name: "Categories",
            component: Categories,
        }
    ]
}