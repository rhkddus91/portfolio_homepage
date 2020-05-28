import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO
} from '../mutations-types'
import { api } from '@/api'

export default {
  signin ({ commit }, payload) {
    const { email, password } = payload
    api.post('/auth/signin', { email, password })
      .then(res => {
        const { accessToken } = res.data
        commit(SET_ACCESS_TOKEN, accessToken)
        alert('로그인 되었습니다.')
        return api.get('/users/me')
      })
      .then(res => {
        commit(SET_MY_INFO, res.data)
      })
      .catch(e => {
        alert(e.response.data.msg)
      })
  },
  signinByToken ({ commit }, token) {
    commit(SET_ACCESS_TOKEN, token)
    return api.get('/users/me')
      .then(res => {
        commit(SET_MY_INFO, res.data)
      })
  },
  signout ({ commit }) {
    commit(DESTROY_ACCESS_TOKEN)
    commit(DESTROY_MY_INFO)
  }
}
