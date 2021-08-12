import Vue from "vue";
import VueRouter from "vue-router";
import GoalZ from "../views/GoalZ.vue";
import WalletZ from "../views/WalletZ.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/goalz",
    name: "GoalZ",
    component: GoalZ,
  },
  {
    path: "/walletz",
    name: "WalletZ",
    component: WalletZ,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
