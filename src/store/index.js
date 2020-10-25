import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  // Este objeto es similar a data()
  state: {
    count: 0
  },

  mutations: {

    // Reciben por parámetro el estado
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    }

  },

  actions: {
  },

  modules: {
  }

})

export default store;
