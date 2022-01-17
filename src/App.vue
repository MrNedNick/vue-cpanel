<template>
  <v-app>
    <v-container class="main">
      <vue-header />
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import VueHeader from "./components/VueHeader.vue";

export default {
  name: "App",
  components: {
    VueHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
font-family: 'Source Sans Pro', sans-serif;
font-size: 16px;
max-width: 1440px;
margin: 0 auto;
}
.main {
  background-color: #F5F6F7;
  min-height: 1500px;
}
</style>
