import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/tutorials',
      name: 'tutorials',
      component: () => import('../pages/tutorialList')
    },
    {
      path: '/index/:id',
      name: 'tutorial-details',
      component: () => import('../pages/index')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../pages/Addtutorial')
    }
  ]
})
