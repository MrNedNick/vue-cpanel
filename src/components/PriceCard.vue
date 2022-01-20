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
                <span class="price">$29</span>
                <span class="price-period ml-2">/Month</span>
              </div>
            </v-card-title>
            <v-card-text class="card-row ml-7 mb-1">
              <span class="card-text">1</span>
            </v-card-text>
            <v-card-text class="card-row ml-7 mb-1">
              <span class="card-text">1</span>
            </v-card-text>
            <v-card-text class="card-row ml-7 mb-1">
              <v-icon class="card-circle mr-1"
                >mdi-checkbox-blank-circle</v-icon
              >
              <v-icon class="card-circle mr-1"
                >mdi-checkbox-blank-circle-outline</v-icon
              >
              <v-icon class="card-circle"
                >mdi-checkbox-blank-circle-outline</v-icon
              >
            </v-card-text>
            <v-card-text class="card-row ml-7 mb-1">
              <span class="card-text mr-1">2</span>
              <span class="card-subtitle">websites per project</span>
            </v-card-text>
            <v-card-text class="card-row ml-7 mb-1">
              <span class="card-text mr-1">500</span>
              <span class="card-subtitle">(weekly)</span>
            </v-card-text>
            <v-card-text class="card-row ml-7 mb-1">
              <span class="card-text mr-1">5k</span>
              <span class="card-subtitle">per project</span>
            </v-card-text>
            <v-card-text class="card-row ml-7 mb-1">
              <span class="card-text">1</span>
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
                Best for <b>small</b> and <b>micro businesses</b> with none to
                little SEO knowledge or web professionals serving them.
              </span>
            </v-card-text>
          </v-card>
        </v-hover>
    </div>
</template>

<script>

export default {
    name: "PriceCard"
}

</script>

