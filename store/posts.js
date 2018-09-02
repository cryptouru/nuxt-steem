export const state = () => ({
  loadedPosts: []
})

export const mutations = {
  set(state, posts) {
    state.loadedPosts = posts
  },
  add(state, post) {
    state.loadedPosts.push(post)
  }
}

export const actions = {
  retreive(vuexContext, payload) {
    const topic = payload.topic
    const query = {
      limit: 20,
    }
    if (payload.tag)
      query.tag = payload.tag
    return this.app.$steemApi.database.getDiscussions(topic, query)
      .then((result) => {
        vuexContext.commit('set', result)
      })
      .catch(err => console.log(err))
  }
}

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
}