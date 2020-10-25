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

  // Nos permite definir getters personalizados
  getters: {

    // Reciben el state y la lista de todos los getters existentes
    getDouble(state/* , getters */) {

      return state.count * 2;

    }

  },

  // Las mutations son sincrónicas, por lo que no podemos hacer llamadas HTTP, en las actions si podemos hacerlas.
  actions: {

    // Reciben el context (La instancia del strore (getters, mutations, state...)) y el payload (Objeto personalizado)
    incrementAsync(context, payload) {

      return new Promise((resolve) => {

        // Simulación de asincronismo
        setTimeout(() => {
          context.commit("increment", payload);
          resolve();
        }, 2000)

      });


    }

  },

  modules: {
  }

})

export default store;
