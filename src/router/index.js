import Vue from 'vue'
import Router from 'vue-router'

import UserProfile from '@/pages/UserProfile'
import MainFeed from '@/pages/MainFeed'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/:user',
      component: UserProfile
    },
    {
      path: '/',
      component: MainFeed
    }
  ]
})
