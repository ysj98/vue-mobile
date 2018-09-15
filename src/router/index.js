import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/index'], resolve)
      }
    },
    {
      path: '/calendar',
      name: 'calendar',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/calendar'], resolve)
      }
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/mine'], resolve)
      }
    },
    {
      path: '/error',
      name: 'error',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/error'], resolve)
      }
    },
    {
      path: '/sign',
      name: 'sign',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/sign'], resolve)
      }
    },
    {
      path: '/statistics',
      name: 'statistics',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/statistics'], resolve)
      }
    }
  ]
})

export default router
