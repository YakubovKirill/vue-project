import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Lint from '../views/Lint.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/lint',
    name: 'Lint',
    component: Lint
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
