import postHelper from '@/helpers/posts'

export const state = () => ({
  loadedPosts: [],
  topTags: []
})

export const mutations = {
  set(state, posts) {
    state.loadedPosts = posts
  },
  add(state, post) {
    state.loadedPosts.push(post)
  },
  setTags(state, tags) {
    state.topTags = tags
  }
}

export const actions = {
  loadTags(vuexContext, context) {
    console.log('loading tags')
    return this.app.$steemApi.call('condenser_api', 'get_trending_tags', ['', 50])
      .then(data => {
        data.shift()
        let tags = data.map(i => i.name)
        // console.log(tags)
        vuexContext.commit('setTags', tags)
      })
      .catch(e => console.log(e))
  },
  retreive(vuexContext, payload) {
    const topic = payload.topic
    const query = {
      limit: 20,
    }
    if (payload.tag)
      query.tag = payload.tag
    return this.app.$steemApi.database.getDiscussions(topic, query)
      .then((result) => {
        let posts = postHelper.shape(result)
        // console.log(posts)
        vuexContext.commit('set', posts)
      })
      .catch(err => console.log(err))
  }
}

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  },
  topTags(state) {
    return state.topTags
  }
}