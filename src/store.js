import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavOpened: false
  },
  mutations: {
    toggleNav(state, payload = true) {
      state.isNavOpened = payload
    }
  },
  actions: {

  }
})
