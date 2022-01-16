<template>
  <v-container class="main" >
    <vue-header />
    <router-view></router-view>
  </v-container>
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 24px;
}

.main {
  background-color: #F5F6F7;
  min-height: 700px;
}
</style>
