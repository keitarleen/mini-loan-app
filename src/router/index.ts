import { createRouter, createWebHistory } from 'vue-router'
import LoanView from '../views/LoanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoanView
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../views/ResultView.vue')
    }
  ]
})

export default router
