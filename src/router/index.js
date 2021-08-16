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
    path: "/goalz/create",
    name: "GoalZ",
    component: GoalZ,
  },
  {
    path: "/goalz/:id/edit",
    name: "GoalZ",
    component: GoalZ,
  },
  {
    path: "/walletz",
    name: "WalletZ",
    component: WalletzListing,
  },
  {
    path: "/walletz/create",
    name: "WalletZ",
    component: WalletZ,
    props: true,
  },
  {
    path: "/walletz/:id/edit",
    name: "WalletZ",
    component: WalletZ,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
