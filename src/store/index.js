import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liste: window.localStorage.getItem('liste')
      ? JSON.parse(window.localStorage.getItem('liste'))
      : [],
  },

  getters: {
    getListe: (state) => state.liste,
  },

  mutations: {
    DO_NOTHING() {},
    SET_LISTE(state, payload) {
      if (payload) {
        state.liste.push(payload)
      } else {
        state.liste = []
      }
    },
    SAVE_LISTE(state) {
      window.localStorage.setItem('liste', JSON.stringify(state.liste))
    },
  },

  actions: {
    async store_user({ commit }, payload) {
      commit('SET_LISTE', payload)
      commit('SAVE_LISTE')
    },
  },
})
