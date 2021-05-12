import Vue from "vue";
import VueRouter from "vue-router";
import My from "../views/my.vue";
import Invoice from "../views/invoice.vue";
import Test  from "../views/test.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "My",
    component: My,
  },{
    path: "/Invoice/:id",
    name: "Invoice",
    component: Invoice,
  },{
    path: "/Test",
    name: "Test",
    component: Test,
  },
 
];

const router = new VueRouter({
  routes,
});

export default router;
