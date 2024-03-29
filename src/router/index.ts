import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TwoColumnLayoutVue from '../layouts/TwoColumnLayout.vue'
import BlankLayoutVue from '../layouts/BlankLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta : { layout : TwoColumnLayoutVue },
      component: HomeView
    },
    {
      path: '/posts/:id',
      name: 'posts',
      meta : { layout : TwoColumnLayoutVue },
      component: () => import('../views/PostView.vue')
    },
    { 
      path: '/:pathMatch(.*)*' || '/posts/:pathMatch(.*)*', 
      meta : { layout : BlankLayoutVue },
      name: '404', 
      component: () => import('../views/404.vue')
    },
    {
      path: '/posts/:pathMatch(.*)*',
      redirect: { name: '404' }
    }
  ]
})

export default router
