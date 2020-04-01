import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex)

const url = 'http://localhost:3000/api'

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
        authUser: (state, payload) => {
            state.tokenId = payload.tokenId
            state.user = payload.user
        }
    },

    actions: {
        signupUser({commit, dispatch}, payload) {
            console.log("ACTION_signup", payload)
            axios.post(url + '/users', payload)
                 .then(res => {
                    commit('authUser', { tokenId: res.data.token, user: res.data.obj })
                    console.log("resdata", res.data)
                    localStorage.setItem('xauthtoken', res.data.token)
                    router.replace('/me')
                 })
                 .catch((err) => {
                    //this.error = 'Invalid data'
                    console.log(err)
                 })
        },

        signinUser({commit, dispatch}, payload) {
            axios.post(url + '/auth', payload)
                 .then(res => {
                    commit('authUser', { tokenId: res.data.token, user: res.data.obj })
                    localStorage.setItem('xauthtoken', res.data.token)
                    router.replace('/me')
                 })
        }
    }

})