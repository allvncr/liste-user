import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/liste',
      name: 'liste',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/version',
      name: 'version',
      component: () => import('../views/VersionView.vue'),
    },
  ],
})

export default router
