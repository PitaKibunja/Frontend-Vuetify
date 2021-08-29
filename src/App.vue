<template>
  <v-app class="grey app lighten-4">
    <Navbar/>
    <v-main class="mx-4 mb-4" color="grey">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
components:{
  Navbar
},
  data: () => ({
    //
  }),
};
</script>
