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
        >?
        <i class="far fa-question-circle"></i>
      </v-btn>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
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
                <v-list-item-title>Davis Geidt</v-list-item-title>
                <v-list-item-subtitle
                  >davis.geidt@gmail.com</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
          <v-list class="menu-list">
            <v-btn
              class="menu-btn"
              color="primary"
              outlined
              width="186"
              height="40"
            >
              Upgrage Subscription
            </v-btn>
          </v-list>

          <v-divider></v-divider>
          <v-list class="menu-list">
            <v-list-item-title> 
              SETTINGS 
            </v-list-item-title>
          </v-list>

          <v-divider></v-divider>
          <v-list class="menu-list"> 
            <v-list-item-title>
              CUSTOMIZE
            </v-list-item-title> 
          </v-list>

          <v-divider></v-divider>
          <v-list>
            <v-btn color="red" text> Logout </v-btn>
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
v-list {
  margin: 0 24px;
}
.menu-btn {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  width: 131px;
  height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>