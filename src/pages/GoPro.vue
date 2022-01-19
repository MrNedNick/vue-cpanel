<template>
  <v-main>
    <v-container class="wrapper">
      <v-container class="d-flex align-center flex-column">
        <h1>Get discovered online.</h1>
        <span>We support beginners at every step of their SEO journey.</span>

        <v-switch inset label="Switch" />
      </v-container>
      <v-container class="card-wrapper d-flex">
        <v-card class="card mx-auto pl-3 pt-4 rounded-xl" elevation="1">
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
            <v-icon class="card-circle mr-1">mdi-checkbox-blank-circle</v-icon>
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

        <v-card class="card mx-auto pl-3 pt-4 rounded-xl" elevation="1">
          <v-card-title class="d-flex flex-column align-start mb-8 ml-6">
            <span class="title">Pro</span>
            <div class="d-flex align-center">
              <span class="price">$99</span>
              <span class="price-period ml-2">/Month</span>
            </div>
          </v-card-title>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text">5</span>
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text">1</span>
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <v-icon class="card-circle mr-1">mdi-checkbox-blank-circle</v-icon>
            <v-icon class="card-circle mr-1">mdi-checkbox-blank-circle</v-icon>
            <v-icon class="card-circle"
              >mdi-checkbox-blank-circle-outline</v-icon
            >
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text mr-1">3</span>
            <span class="card-subtitle">websites per project</span>
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text mr-1">2,500</span>
            <span class="card-subtitle">(weekly)</span>
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text mr-1">10</span>
            <span class="card-subtitle">per project</span>
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text">10</span>
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
              <b>Web professionals, medium businesses</b> and In-house SEO
              managers with little to advanced SEO knowledge.
            </span>
          </v-card-text>
        </v-card>

        <v-card class="card mx-auto pl-3 pt-4 rounded-xl" elevation="1">
          <v-card-title class="d-flex flex-column align-start mb-8 ml-6">
            <span class="title">Agency</span>
            <div class="d-flex align-center">
              <span class="price">$219</span>
              <span class="price-period ml-2">/Month</span>
            </div>
          </v-card-title>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text">30</span>
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text">5</span>
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <v-icon class="card-circle mr-1">mdi-checkbox-blank-circle</v-icon>
            <v-icon class="card-circle mr-1">mdi-checkbox-blank-circle</v-icon>
            <v-icon class="card-circle">mdi-checkbox-blank-circle</v-icon>
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text mr-1">6</span>
            <span class="card-subtitle">websites per project</span>
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text mr-1">5,000</span>
            <span class="card-subtitle">(weekly)</span>
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text mr-1">50</span>
            <span class="card-subtitle">per project</span>
          </v-card-text>
          <v-card-text class="card-row ml-7 mb-1">
            <span class="card-text">Unlimited</span>
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
              Best option for small and medium agencies offering SEO.
            </span>
          </v-card-text>
        </v-card>
      </v-container>

      <v-container class="bottom-blocks">
        <v-container class="block d-flex justify-space-around align-center">
          <v-card class="checkbox-card" elevation="0">
            <v-card-title class="checkbox-card-title">Keywords</v-card-title>
            <v-checkbox
              class="checkbox ml-4"
              label="Analyze the terms that are important to you & your competition."
              v-model="checkbox"
            />
            <v-checkbox 
              class="checkbox pt-0 mt-0 ml-4"
              label="Identify opportunity keywords." 
              v-model="checkbox"
             />
            <v-btn
              class="card-btn ml-4 mt-5 text-capitalize"
              color="primary"
              outlined
            >
              Pick Plan
            </v-btn>
          </v-card>
          <v-img
            src="../assets/keywords.png"
            max-height="360"
            max-width="360"
          />
        </v-container>
        <v-container class="block d-flex justify-space-around">
          <v-img
            src="../assets/siteAudit.png"
            max-height="360"
            max-width="360"
          />
          <v-card class="checkbox-card" elevation="0">
            <v-card-title class="checkbox-card-title">Site Audit</v-card-title>
            <v-checkbox
              class="checkbox ml-4"
              label="Optimize technical implementation."
              v-model="checkbox"
            />
            <v-checkbox 
              class="checkbox pt-0 mt-0 ml-4"
              label="Avoid technical errors." 
              v-model="checkbox"
             />
             <v-checkbox 
              class="checkbox pt-0 mt-0 ml-4"
              label="WDF*IDF analysis" 
              v-model="checkbox"
             />
            <v-btn
              class="card-btn ml-4 mt-5 text-capitalize"
              color="primary"
              outlined
            >
              Pick Plan
            </v-btn>
          </v-card>
        </v-container>
        <v-container class="block d-flex justify-space-around">
          <v-card class="checkbox-card" elevation="0">
            <v-card-title class="checkbox-card-title">Rank Tracking</v-card-title>
            <v-checkbox
              class="checkbox ml-4"
              label="Monitor your most important keywords."
              v-model="checkbox"
            />
            <v-checkbox 
              class="checkbox pt-0 mt-0 ml-4"
              label="See the ranking development of you projects" 
              v-model="checkbox"
             />
            <v-btn
              class="card-btn ml-4 mt-5 text-capitalize"
              color="primary"
              outlined
            >
              Pick Plan
            </v-btn>
          </v-card>
          <v-img
            src="../assets/rankTracker.png"
            max-height="360"
            max-width="360"
          />
        </v-container>
      </v-container>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      checkbox: true,
    }
  },
};
</script>

<style scoped>
.wrapper {
  font-family: Source Sans Pro;
  color: #05122d;
  margin-top: 0px;
}
/* card */
.card {
  width: 303px;
  height: 974px;
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
/* bottom */
.bottom-blocks {
  max-width: 1000px;
}
.checkbox-card {
  background-color: #F5F6F7;;
}
.checkbox-card-title {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
}
</style>