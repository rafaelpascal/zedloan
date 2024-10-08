import { createRouter, createWebHistory } from "vue-router";
import Home from "../Views/Home.vue";
import Login from "../Views/Login.vue";
import Profile from "../Views/Profile.vue";
import Loan from "../Views/Loan.vue";
import Accounts from "../Views/Accounts.vue";
import AdminHome from "../Views/AdminHome.vue";
import Applayout from "../components/ui/layout/Applayout.vue";

const routes = [
  {
    path: "/admin/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    component: Applayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "offers",
        name: "Loan",
        component: Loan,
      },
      {
        path: "accounts",
        name: "Accounts",
        component: Accounts,
      },
      {
        path: "admin/home",
        name: "AdminHome",
        component: AdminHome,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
