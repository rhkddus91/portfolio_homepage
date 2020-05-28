import Vue from 'vue'
import Vuex from 'vuex'
import accessToken from './accessToken'
import posts from './posts'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    accessToken: accessToken,
    posts: posts
  }
})
