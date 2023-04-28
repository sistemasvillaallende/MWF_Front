import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LogIn',
    redirect: 'LogIn',
    children: [
      {
        path: '/LogIn',
        name: 'LogIn',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/LogIn.vue'),

        params: true,
      },
      {
        path: '/ListaTramites/:hash',
        name: 'ListaTramites',
        component: () => import('@/views/ListaTramites.vue'),
      },
      {
        path: '/Tramite/:hash/:id',
        name: 'Tramite',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Tramite.vue'),

        params: true,
      },
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
