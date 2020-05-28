export default {
  getAccessToken (state) {
    return state.accessToken
  },
  getMe (state) {
    return state.me
  },
  isAuthorized (state) {
    return state.accessToken.length > 0 && !!state.me
  }
}
