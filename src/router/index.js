import Vue from 'vue'
import Router from 'vue-router'

import UserProfile from '@/pages/UserProfile'
import MainFeed from '@/pages/MainFeed'
import Landing from '@/pages/Landing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/feed',
      name: 'Feed',
      component: MainFeed
    },
    {
      path: '/:user',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '',
      name: 'Landing',
      component: Landing,
      meta: {
        main: { mode: 'landing' } 
      }
    }
  ]
})
