import Vue from "vue";
import VueRouter from "vue-router";
import GoalzAdd from "../views/goalz/GoalzAdd.vue";
import GoalzEdit from "../views/goalz/GoalzEdit.vue";
import GoalzListing from "../views/goalz/GoalzListing.vue";
import GoalzTopUp from "../views/goalz/GoalzTopUp.vue";
import GoalzWithdraw from "../views/goalz/GoalzWithdraw.vue";
import WalletZ from "../views/walletz/WalletZ.vue";
import WalletzListing from "../views/walletz/WalletzListing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/goalz",
  },
  {
    path: "/goalz",
    name: "GoalZList",
    component: GoalzListing,
  },
  {
    path: "/goalz/create",
    name: "GoalZ",
    component: GoalzAdd,
  },
  {
    path: "/goalz/:id/edit",
    name: "GoalzEdit",
    component: GoalzEdit,
  },
  {
    path: "/goalz/:id/topup",
    name: "GoalzTopUp",
    component: GoalzTopUp,
  },
  {
    path: "/goalz/:id/withdraw",
    name: "GoalzWithdraw",
    component: GoalzWithdraw,
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
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
