import {
  FETCH_POST,
  UPLOAD_POST,
  DELETE_POST
} from '../mutations-types'


export default {
  [FETCH_POST] (state, payload) {
    const posts = payload
    state.posts = posts
  },
  [UPLOAD_POST] (state, payload) {
    const post = payload
    console.log(payload)
    state.posts.push(post)
  },
  [DELETE_POST] (state, payload) {
    console.log(payload)
    const targetIndex = state.posts.findIndex(obj => obj.id === parseInt(payload.id))
    state.posts.splice(targetIndex, 1)
  }
}
