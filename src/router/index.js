import Vue from 'vue'
import Router from 'vue-router'

import UserProfile from '@/pages/UserProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: UserProfile
    }
  ]
})
