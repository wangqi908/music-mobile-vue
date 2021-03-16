import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
  },
  {
    path: '/playlist/:id',
    name: 'PlayList',
    component: () =>
      import(
        /* webpackChunkName: "playlist" */ '../views/playList/PlayList.vue'
      )
  },
  {
    path: '/song/:id',
    name: 'Song',
    component: () =>
      import(/* webpackChunkName: "song" */ '../views/song/Song.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/test/Test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
