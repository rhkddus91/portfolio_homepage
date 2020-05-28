import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO
} from '../mutations-types'
import { api } from '@/api'
import Cookes from 'js-cookie'

export default {
  [SET_ACCESS_TOKEN] (state, accessToken) {
    state.accessToken = accessToken
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    Cookes.set('accessToken', accessToken)
  },
  [SET_MY_INFO] (state, me) {
    if (me) {
      state.me = me
    }
  },
  [DESTROY_ACCESS_TOKEN] (state) {
    state.accessToekn = ''
    delete api.defaults.headers.common.Authorization
    Cookes.remove('accessToken')
  },
  [DESTROY_MY_INFO] (state) {
    state.me = null
  }
}
