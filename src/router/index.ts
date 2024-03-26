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
      path: '/loan-approved',
      name: 'approved',
      component: () => import('../views/ApprovedView.vue')
    },
    {
      path: '/loan-declined',
      name: 'declined',
      component: () => import('../views/DeclinedView.vue')
    }
  ]
})

export default router
