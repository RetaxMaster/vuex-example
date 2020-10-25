import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  // Este objeto es similar a data()
  state: {
    count: 0
  },

  // Permiten actualizar la información del estado
  mutations: {

    // Reciben por parámetro el estado, con payload podemos pasar configuraciones porpias al mutation
    increment(state, payload = {}) {
      state.count += payload.number || 1;
    },

    decrement(state) {
      state.count--;
    }

  },

  getters: {

    // Reciben el state y la lista de todos los getters existentes
    getDouble(state/* , getters */) {

      return state.count * 2;

    }

  },

  actions: {
  },

  modules: {
  }

})

export default store;
