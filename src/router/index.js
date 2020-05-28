import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '@/components/header/AppHeader'
import ProfilePage from '@/pages/ProfilePage'
import AdminPage from '@/pages/AdminPage'
import PortfolioPage from '@/pages/PortfolioPage'
import ContactPage from '@/pages/ContactPage'

import { store } from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProfilePage',
      components: {
        header: AppHeader,
        default: ProfilePage
      }
    },
    {
      path: '/portfolio',
      name: 'PortfolioPage',
      components: {
        header: AppHeader,
        default: PortfolioPage
      }
    },
    {
      path: '/contact',
      name: 'ContactPage',
      components: {
        header: AppHeader,
        default: ContactPage
      }
    },
    {
      path: '/admin',
      name: 'AdminPage',
      components: {
        header: AppHeader,
        default: AdminPage
      }
      /*,
      beforeEnter (to, from, next) {
        const { isAuthorized } = store.getters
        if (!isAuthorized) {
          alert('로그인이 필요합니다!')
          next({ name: 'LoginPage' })
        }
        next()
      }
      */
    }
  ]
})
