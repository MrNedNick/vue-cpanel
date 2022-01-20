<template>
  <div>
    <v-card
      :elevation="cardElevation"
      :class="
        cardBlueBorder
          ? 'hover-card mx-auto pl-3 pt-4 rounded-xl'
          : 'card mx-auto pl-3 pt-4 rounded-xl'
      "
    >
      <v-card-title class="d-flex flex-column align-start mb-8 ml-6">
        <span class="title">{{ title }}</span>
        <div class="d-flex align-center">
          <span class="price">{{ price }}</span>
          <span class="price-period ml-2">/Month</span>
        </div>
      </v-card-title>
      <v-card-text class="card-row ml-7 mb-1">
        <span class="card-text">{{ projects }}</span>
      </v-card-text>
      <v-card-text class="card-row ml-7 mb-1">
        <span class="card-text">{{ users }}</span>
      </v-card-text>
      <v-card-text class="card-row ml-7 mb-1">
        <v-icon class="card-circle mr-1">{{ circle1 }}</v-icon>
        <v-icon class="card-circle mr-1">{{ circle2 }}</v-icon>
        <v-icon class="card-circle">{{ circle3 }}</v-icon>
      </v-card-text>
      <v-card-text class="card-row ml-7 mb-1">
        <span class="card-text mr-1">{{ competitor }}</span>
        <span class="card-subtitle">websites per project</span>
      </v-card-text>
      <v-card-text class="card-row ml-7 mb-1">
        <span class="card-text mr-1">{{ keyword }}</span>
        <span class="card-subtitle">(weekly)</span>
      </v-card-text>
      <v-card-text class="card-row ml-7 mb-1">
        <span class="card-text mr-1">{{ site }}</span>
        <span class="card-subtitle">per project</span>
      </v-card-text>
      <v-card-text class="card-row ml-7 mb-1">
        <span class="card-text">{{ search }}</span>
      </v-card-text>
      <v-card-text class="card-row ml-7 mb-1">
        <v-icon class="card-check">mdi-check</v-icon>
      </v-card-text>
      <v-card-text class="card-row ml-7 mb-8">
        <v-icon class="card-check">mdi-check</v-icon>
      </v-card-text>
      <pick-plan-button         
        @mouseOver="mouseOver"
        @mouseLeave="mouseLeave"
        />
      <v-divider></v-divider>
      <v-card-text class="card-footer mt-5 ml-2">
        <span class="card-footer-text">
          {{ footerText }}
        </span>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import PickPlanButton from "./PickPlanButton.vue"

export default {
  name: "PriceCard",
  components: {
      PickPlanButton,
  },
  props: [
    "card",
    "id",
    "title",
    "price",
    "projects",
    "users",
    "circle1",
    "circle2",
    "circle3",
    "competitor",
    "keyword",
    "site",
    "search",
    "seo",
    "customer",
    "footerText",
  ],
  data: function () {
    return {
      cardBlueBorder: false,
      cardElevation: "",
    };
  },
  methods: {
    mouseOver: function () {
      this.cardBlueBorder = true;
      this.cardElevation = 5;
    },
    mouseLeave: function () {
      this.cardBlueBorder = false;
      this.cardElevation = 1;
    },
  },
};
</script>

<style scoped>
/* card */
.card {
  width: 303px;
  height: 974px;
  border: 2px solid white;
}
.hover-card {
  width: 303px;
  height: 974px;
  border: 2px solid blue;
}
.title {
  font-size: 22px;
  line-height: 28px;
}
.price {
  font-weight: bold;
  font-size: 56px;
  line-height: 70px;
}
.price-period {
  font-size: 16px;
  line-height: 166%;
  color: #05122d;
  opacity: 0.4;
}
.card-text {
  font-weight: 600;
  font-size: 16px;
  line-height: 166%;
}
.card-subtitle {
  font-size: 16px;
  line-height: 166%;
  color: #05122d;
  opacity: 0.4;
}
.card-circle.v-icon.v-icon {
  font-size: 10px;
  color: #3366ff;
}
.card-check.v-icon.v-icon {
  font-size: 18px;
  color: #3366ff;
}
.card-footer {
  max-width: 274px;
}
.card-footer-text {
  font-size: 14px;
  line-height: 166%;
  color: #05122d;
  opacity: 0.6;
}
</style>

