import Vue from "vue";
import VueRouter from "vue-router";
import GoalZ from "../views/GoalZ.vue";
import WalletZ from "../views/WalletZ.vue";
import GoalzListing from "../views/GoalzListing.vue";
import WalletzListing from "../views/WalletzListing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/goalz",
    name: "GoalZList",
    component: GoalzListing,
  },
  {
    path: "/add-goalz",
    name: "GoalZ",
    component: GoalZ,
  },
  {
    path: "/walletz",
    name: "WalletZ",
    component: WalletzListing,
  },
  {
    path: "/add-walletz",
    name: "WalletZ",
    component: WalletZ,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
