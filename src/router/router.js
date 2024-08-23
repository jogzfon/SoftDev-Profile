import { createRouter, createWebHistory } from 'vue-router';
// import HomePage from '../views/HomePage.vue'

const routes = [
  // { path: '/HomePage/',name: 'Home', component: HomePage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
