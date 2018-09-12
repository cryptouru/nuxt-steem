export const actions = {
  nuxtServerInit({ dispatch, commit }, { req }) {
    if (req.session && req.session.authUser)
      dispatch('users/initialize', {user: req.session.authUser, access_token: req.session.access_token})
    console.log('nuxtServerInit')
    return dispatch('posts/loadTags')
  }
}