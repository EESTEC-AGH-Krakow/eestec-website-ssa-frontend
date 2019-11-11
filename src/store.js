import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavOpened: false,
    week: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
  },
  mutations: {
    toggleNav(state, payload = true) {
      state.isNavOpened = payload
    }
  },
  actions: {

  }
})
