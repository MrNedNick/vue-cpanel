<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        elevation="1"
        :class="
          hover
            ? 'hover-card mx-auto pl-3 pt-4 rounded-xl'
            : 'card mx-auto pl-3 pt-4 rounded-xl'
        "
      >
        <v-card-title class="d-flex flex-column align-start mb-8 ml-6">
          <span class="title">Starter</span>
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
          <v-icon class="card-circle mr-1">mdi-checkbox-blank-circle</v-icon>
          <v-icon class="card-circle mr-1"
            >mdi-checkbox-blank-circle-outline</v-icon
          >
          <v-icon class="card-circle">mdi-checkbox-blank-circle-outline</v-icon>
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
        <v-btn
          class="card-btn ml-5 mt-5 mb-10 text-capitalize"
          color="primary"
          outlined
        >
          Pick Plan
        </v-btn>
        <v-divider></v-divider>
        <v-card-text class="card-footer mt-5 ml-2">
          <span class="card-footer-text">
            {{ footerText }}
          </span>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "PriceCard",
  props: [
    "card",
    "id",
    "price",
    "projects",
    "users",
    "reporting",
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
      //   cards: [
      //     {
      //       id: 1,
      //       price: "$29",
      //       projects: 1,
      //       users: 1,
      //       reporting: "",
      //       competitor: 2,
      //       keyword: 500,
      //       site: "5k",
      //       search: 1,
      //       seo: "",
      //       customer: "",
      //       footerText:
      //         "Best for small and micro businesses with none to little SEO knowledge or web professionals serving them.",
      //     },
      //     {
      //       id: 2,
      //       projects: 1,
      //       users: 1,
      //       reporting: 1,
      //       competitor: 1,
      //       keyword: 1,
      //       site: 1,
      //       search: 1,
      //       seo: 1,
      //       customer: 1,
      //       footerText: 1,
      //     },
      //     {
      //       id: 3,
      //       projects: 1,
      //       users: 1,
      //       reporting: 1,
      //       competitor: 1,
      //       keyword: 1,
      //       site: 1,
      //       search: 1,
      //       seo: 1,
      //       customer: 1,
      //       footerText: 1,
      //     },
      //   ],
    };
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
.card-btn {
  width: 239px;
  height: 40px;
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

