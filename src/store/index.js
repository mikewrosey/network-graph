import Vue from 'vue'
import Vuex from 'vuex'
import Network from './network'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Network
    },
    strict: process.env.DEV
})
