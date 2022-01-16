<template>
  <v-container class="wrapper">
    <v-container class="wrapper-left">
      <div>
        <v-img alt="logo" src="../assets/logo.png" height="24" width="113" />
      </div>
      <v-btn>
        <router-link to="/keywords">Keywords</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/projects">Projects</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/advisor">Advisor</router-link>
      </v-btn>
    </v-container>
    <v-container class="wrapper-right">
      <v-btn>
        <v-icon></v-icon>
      </v-btn>
      <v-btn>PHOTO</v-btn>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "VueHeader",

  data: () => ({}),
};
</script>

<style>
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 1440px;
  height: 72px;
  display: flex;
  background-color: rgb(189, 189, 189);
}
.wrapper-left {
  display: flex;
  justify-content: flex-start;
  background-color: rgb(255, 255, 255);
}
.wrapper-right {
  display: flex;
  justify-content: flex-end;
}
</style>