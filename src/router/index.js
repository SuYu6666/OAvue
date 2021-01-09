import Vue from 'vue'
import Router from 'vue-router'

import home_page from '@/components/home_page'
import personnel from '@/components/personnel'
import perdao from '@/components/perdao'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/perdao',
      name: 'perdao',
      component: perdao
    },
    {
      path: '/home_page',
      name: 'home_page',
      component: home_page
    },
    {
      path: '/personnel',
      name: 'personnel',
      component: personnel
    },

  ]
})
