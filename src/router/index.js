import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateBlog from '@/views/admin/blog/CreateBlog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin/blog/create',
      name: 'create-blog',
      component: CreateBlog,
    },
  ],
})

export default router
