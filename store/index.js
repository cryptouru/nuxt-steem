export const actions = {
  nuxtServerInit({ dispatch }) {
    console.log('nuxtServerInit')
    return dispatch('posts/loadTags')
  }
}