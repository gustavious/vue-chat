import Vue from 'vue'
import Vuex from 'vuex'
import ChatModule from './ChatModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    chat: ChatModule
  },
})
