import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        tokenId: null,
        user: {}
    },

    getters: {
        fun: (state) => {
            return state.x
        }
    },

    mutations: {
        fun: (state, payload) => {
            state.x = payload
        }
    },

    actions: {
        fun: ({commit}, payload) => {
            commit('fun', payload)
        }
    }

})