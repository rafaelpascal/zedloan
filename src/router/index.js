import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Loan from '../views/Loan.vue';
import Accounts from '../views/Accounts.vue';
import Applayout from '../components/ui/layout/Applayout.vue'; 

const routes = [
    {
      path: '/',
      component: Applayout,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: 'offers',
          name: 'Loan',
          component: Loan
        },
        {
          path: 'accounts',
          name: 'Accounts',
          component: Accounts
        },
      ]
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
  });
  
  export default router;