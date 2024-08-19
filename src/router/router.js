import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'
// import ContactPage from '../views/ContactPage.vue'
// import EducationPage from '../views/EducationPage.vue'
// import ExperiencePage from '../views/ExperiencePage.vue'
// import PortfolioPage from '../views/PortfolioPage.vue'
// import ToolsPage from '../views/ToolsPage.vue'

const routes = [
    { path: '/HomePage/',name: 'Home', component: HomePage },
    // { path: '/ContactPage/',name: 'Home', component: ContactPage },
    // { path: '/EducationPage/',name: 'Home', component: EducationPage },
    // { path: '/ExperiencePage/',name: 'Home', component: ExperiencePage },
    // { path: '/PortfolioPage/',name: 'Home', component: PortfolioPage },
    // { path: '/ToolsPage/',name: 'Home', component: ToolsPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
