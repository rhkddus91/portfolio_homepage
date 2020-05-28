import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import { vuetify } from '@/plugins/vuetify' // path to vuetify export
import Cookies from 'js-cookie'

import 'es6-promise/auto' // explorer 호환문제.

function init () {
  const savedToken = Cookies.get('accessToken')
  if (savedToken) {
    return store.dispatch('signinByToken', savedToken)
  } else {
    return Promise.resolve()
  }
}

Vue.config.productionTip = false

/* eslint-disable no-new */
init().then(res => {
  new Vue({
    el: '#app',
    vuetify,
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
