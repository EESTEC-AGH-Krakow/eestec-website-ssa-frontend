import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSpeaker: null,
    currentPartner: null,
    isNavOpened: false,
    week: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
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
