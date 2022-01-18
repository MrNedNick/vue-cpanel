<template>
  <v-app-bar
      color="white"
      app
      height="72"
      max-width="1440"
      flat
      class="wrapper"
      elevation="2"
  >
    <v-container class="wrapper-left">
      <div class="header-logo">
        <v-img alt="logo" src="../assets/logo.png" height="24" width="113" />
      </div>
      <router-link to="/keywords" class="header-router" active-class="active">
        <span class="header-link">Keywords</span>
      </router-link>
      <router-link to="/projects" class="header-router">
        <span class="header-link">Projects</span>
      </router-link>
      <router-link to="/advisor" class="header-router">
        <span class="header-link">Advisor</span>
      </router-link>
    </v-container>
    <v-container class="wrapper-right">
      <v-btn depressed color="white" height="72" c lass="question"
      ><v-icon color="blue-grey darken-2">mdi-help-circle-outline</v-icon>
      </v-btn>
      <v-menu
          :close-on-content-click="false"
          :nudge-width="234"
          max-width="234"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              depressed
              color="white"
              height="72"
              class="btn"
              v-bind="attrs"
              v-on="on"
          >
            <div class="cercle"></div>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">Davis Geidt</v-list-item-title>
                <v-list-item-subtitle class="grey--text text--lighten-1"
                >davis.geidt@gmail.com</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list class="menu-list" subheader>
            <v-btn
                class="menu-btn ml-5 mt-5 mb-5 text-capitalize"
                color="primary"
                outlined
                width="186"
                height="40"
            >
              Upgrage Subscription
            </v-btn>
            <v-divider></v-divider>
            <v-subheader class="grey--text"> SETTINGS </v-subheader>
            <v-list-item-group color="primary" sub-group>
              <v-list-item class="pl-8 grey--text text--darken-1"> Account Settings </v-list-item>
              <v-list-item class="pl-8 grey--text text--darken-1">
                <div class="pro">PRO</div>
                Go Pro
                <v-icon class="ml-15 grey--text">mdi-chevron-right</v-icon>
              </v-list-item>
              <v-divider></v-divider>
              <v-subheader class="grey--text"> CUSTOMIZE </v-subheader>
              <v-list-item class="pl-8 grey--text text--darken-1">Navigation</v-list-item>
              <v-list-item class="pl-8 grey--text text--darken-1">Dashboard</v-list-item>
              <v-divider></v-divider>
              <v-list-item color="red" class="pl-8 mt-5 red--text">Logout</v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
    </v-container>
  </v-app-bar>
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
  margin: 0 auto;
}
.wrapper-left {
  display: flex;
  justify-content: flex-start;
}
.wrapper-right {
  display: flex;
  justify-content: flex-end;
}
.header-logo {
  margin-right: 64px;
}
.header-router {
  text-decoration: none;
}
.header-link {
  color: #05122d;
  margin-right: 40px;
  font-size: 16px;
  font-weight: 600;
  line-height: 27px;
  opacity: 0.6;
}
.router-link-active {
  color: aqua;
}
.btn {
  height: 72px;
  width: 56px;
}
.question {
  color: #05122d;
}
.cercle {
  background-color: black;
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.menu-btn {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
}
.pro {
  padding: 1px 4px;
  width: 31px;
  height: 17px;
  border-radius: 2px;
  margin-right: 8px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: white;
  background-color: #3366ff;
}
</style>