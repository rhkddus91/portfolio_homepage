import {
  FETCH_POST,
  UPLOAD_POST,
  DELETE_POST
} from '../mutations-types'
import { api, multer } from '@/api'

export default {
  fetchPost ({ commit }, payload) {
    api.get('/portfolio')
      .then(res => {
        const payload = res.data
        commit(FETCH_POST, payload)
      })
      .catch(e => {
        console.log(e)
      })
  },
  uploadPost ({ commit }, payload) {
    multer.post(`/portfolio/img`, payload)
      .then(res => {
        const response = res.data
        api.post('/portfolio', response)
          .then(res => {
            commit(UPLOAD_POST, res.data)
            alert('업로드가 완료되었습니다.')
          })
          .catch(e => {
            console.log(e)
          })
      })
      .catch(e => {
        console.log(e)
      })

  },
  deletePost ({ commit }, payload) {
    api.delete('/portfolio', {data: payload})
      .then(res => {
        const payload = res.data
        commit(DELETE_POST, payload)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
