import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/views/Home.vue'
import ProductPage from './components/views/ProductPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
