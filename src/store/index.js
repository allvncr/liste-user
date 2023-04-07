import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import domain from '@/environment'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liste: [],
  },

  getters: {
    getListe: (state) => state.liste,
  },

  mutations: {
    DO_NOTHING() {},
    SET_LISTE(state, payload) {
      if (payload) {
        state.liste = payload
      } else {
        state.liste = []
      }
    },
    DELETE_LISTE(state, payload) {
      for (let index = 0; index < state.liste.length; index++) {
        if (state.liste[index].author == payload.author) {
          state.liste.splice(index, 1)
          break
        }
      }
    },
    PUSH_LISTE(state, payload) {
      if (payload) {
        state.liste.push(payload)
      }
    },
  },

  actions: {
    async get_user({ commit }) {
      try {
        const response = await axios.get(domain + `/posts`)
        commit('SET_LISTE', response.data)
        return true
      } catch (error) {
        throw error.response
          ? error.response.data.message
          : 'Une erreur est survenue !'
      }
    },
    async store_user({ commit }, payload) {
      try {
        var params = {
          author: payload.author,
          title: payload.title,
          abstract: payload.abstract,
          url: payload.url,
        }
        const response = await axios.post(domain + `/posts`, null, {
          params,
        })
        commit('PUSH_LISTE', response.data)
        return true
      } catch (error) {
        throw error.response
          ? error.response.data.message
          : 'Une erreur est survenue !'
      }
    },
    async delete_user({ commit }, payload) {
      try {
        await axios.delete(domain + `/posts/` + payload._id)

        commit('DELETE_LISTE', payload)
        return true
      } catch (error) {
        throw error.response
          ? error.response.data.message
          : 'Une erreur est survenue !'
      }
    },
  },
})
