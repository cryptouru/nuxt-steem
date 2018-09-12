import steemconnect from '@/helpers/steemconnect'

export const state = () => ({
  authUser: null,
  token: null,
  api: null
})

export const mutations = {
  set(state, user) {
    state.authUser = user
  },
  setApi(state, sc2) {
    state.api = sc2
  },
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  initialize(vuexContext, payload) {
    vuexContext.commit('set', payload.user)
    vuexContext.commit('setToken', payload.access_token)
  },
  clientInit(vuexContext) {
    if (vuexContext.state.authUser && vuexContext.state.token) {
      steemconnect.setAccessToken(vuexContext.state.token)
      vuexContext.commit('setApi', steemconnect)
    }
  }
}

export const getters = {
  loggedIn(state) {
    return state.authUser !== null
  },
  authUser(state) {
    return state.authUser
  }
}