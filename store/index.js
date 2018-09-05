export const actions = {
  async nuxtServerInit({ dispatch }) {
    console.log('nuxtServerInit')
    await dispatch('posts/loadTags')
  }
}