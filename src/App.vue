<template>
  <div id="app">

    <div>

      <h2>Contador</h2>
      <p>{{ count }} {{ stringTest }}</p>

      <div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </div>

      <div>
        <button @click="increment10">+10</button>
      </div>

    </div>


  </div>
</template>

<script>

// Esta función nos permite simplificar el importado de propiedades en el caso que sean demasiadas, funciona igual para las mutaciones
import { mapState, mapMutations } from "vuex";

export default {

  name: "app",

  // La manera más fácil de obtener información del estado es a través de una computed property, en el caso de que sean pocas, si son varias lo mejor es usar mapState
  /* computed: {

    count() {

      return this.$store.state.count;

    }

  } */

  data() {
    return {
      test: "test"
    }
  },

  // Recibe un array con todas las propiedades que queremos mapear del estado
  computed:  {

    // Podemos usar spread operators o Object.assign para meter las propiedades computadas de Vuex mas nustras propias propiedades
    ...mapState(['count']),

    stringTest() {
      return this.test;
    }

  },

  methods: {

    ...mapMutations(["increment", "decrement"]),

    /* increment() {

      // Así podemos mandar a llamar a las mutations del store
      this.$store.commit("increment");

    }, */

    increment10() {
      this.$store.commit("increment", {
        number: 10
      });
    },

    /* decrement() {
      this.$store.commit("decrement");
    } */

  }

}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
