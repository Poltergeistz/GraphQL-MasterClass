<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GRAPHQL</span>
        <span class="font-weight-light">MASTER CLASS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/Poltergeistz/GraphQL-MasterClass"
        target="_blank"
      >
        <span class="mr-2">README</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Breaches/>
    </v-content>
  </v-app>
</template>

<script>
import Breaches from './components/Breaches'

export default {
  name: 'App',
  components: {
    Breaches
  },
  data () {
    return {
      //
    }
  }
}
</script>
