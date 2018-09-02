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
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
  },
  retreivePosts(vuexContext) {
    
  }
}

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
}