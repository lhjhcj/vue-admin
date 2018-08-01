import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(vuex)

const store = new Vuex.store({
  state
})

export default store;
