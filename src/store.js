import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavOpened: false,
    currentSpeaker: null,
    currentPartner: null
  },
  mutations: {
    toggleNav(state, payload = true) {
      state.isNavOpened = payload
    },
    changeSpeaker(state, speaker) {
      state.currentSpeaker = speaker
    },
    changePartner(state, partner) {
      state.currentPartner = partner
    }
  },
  actions: {

  }
})
