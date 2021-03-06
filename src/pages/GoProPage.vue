<template>
  <v-main>
    <v-container class="wrapper mt-15">
      <v-container class="top-wrapper d-flex align-center flex-column">
        <h1 class="page-title">Get discovered online.</h1>
        <span class="page-subtitle"
          >We support beginners at every step of their SEO journey.</span
        >
        <v-container
          class="switcher-wrapper d-flex justify-center align-center mt-16 mb-6"
        >
          <span
            :class="
              switchValue
                ? 'ml-1 mr-3 switcher-text text-grey'
                : 'ml-1 mr-3 switcher-text'
            "
          >
            Bill Monthly
          </span>
          <v-switch v-model="switchValue" class="switcher" inset />
          <span
            :class="
              switchValue
                ? 'ml-1 mr-3 switcher-text'
                : 'ml-1 mr-3 switcher-text text-grey'
            "
          >
            Bill Yearly
          </span>
          <span class="switcher-text-green">SAVE UP</span>
        </v-container>
      </v-container>
      <v-container class="card-wrapper d-flex justify-center">
        <v-card class="card-left mx-auto mr-0" elevation="0">
          <v-card-text class="card-row mb-1">
            <span class="card-left-text">Projects</span>
          </v-card-text>
          <v-card-text class="card-row mb-2">
            <span class="card-left-text">Users</span>
          </v-card-text>
          <v-card-text class="card-row mb-1">
            <span class="card-left-text">Reporting</span>
          </v-card-text>
          <v-card-text class="card-row mb-2">
            <span class="card-left-text">Competitor Benchmarking</span>
          </v-card-text>
          <v-card-text class="card-row mb-2">
            <span class="card-left-text">Keyword Monitoring</span>
          </v-card-text>
          <v-card-text class="card-row mb-2">
            <span class="card-left-text">Site Audit Pages to Crawl</span>
          </v-card-text>
          <v-card-text class="card-row mb-2">
            <span class="card-left-text">Search Engines</span>
          </v-card-text>
          <v-card-text class="card-row mb-2">
            <span class="card-left-text">SEO Tutorials</span>
          </v-card-text>
          <v-card-text class="card-row">
            <span class="card-left-text">Customer Support</span>
          </v-card-text>
        </v-card>

        <price-card
          :class="switchValue ? 'mr-9' : 'mr-9 hide-line'"
          v-for="card in cards"
          :key="card.id"
          :greenText="card.greenText"
          :title="card.title"
          :price="switchValue ? card.yearlyPrice : card.price"
          :oldPrice="switchValue ? card.oldPrice : ''"
          :projects="card.projects"
          :users="card.users"
          :circle1="card.circle1"
          :circle2="card.circle2"
          :circle3="card.circle3"
          :competitor="card.competitor"
          :keyword="card.keyword"
          :site="card.site"
          :search="card.search"
          :seo="card.seo"
          :customer="card.customer"
          :footerText="card.footerText"
          @clickBtn="clickBtn"
        />
      </v-container>

      <v-container class="bottom-blocks mt-16">
        <v-container class="block d-flex justify-space-around align-center">
          <v-card class="checkbox-card" elevation="0">
            <v-card-title class="checkbox-card-title">Keywords</v-card-title>
            <div class="checkbox">
              <div class="check-wrapper">
                <v-icon class="check">mdi-check</v-icon>
              </div>
              <v-card-text class="check-text"
                >Analyze the terms that are important to you & your
                competition.</v-card-text
              >
            </div>

            <div class="checkbox">
              <div class="check-wrapper">
                <v-icon class="check">mdi-check</v-icon>
              </div>
              <v-card-text class="check-text"
                >Identify opportunity keywords.</v-card-text
              >
            </div>
            <pick-plan-button @clickBtn="clickBtn" />
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
            <div class="checkbox">
              <div class="check-wrapper">
                <v-icon class="check">mdi-check</v-icon>
              </div>
              <v-card-text class="check-text"
                >Optimize technical implementation.</v-card-text
              >
            </div>

            <div class="checkbox">
              <div class="check-wrapper">
                <v-icon class="check">mdi-check</v-icon>
              </div>
              <v-card-text class="check-text"
                >Avoid technical errors.</v-card-text
              >
            </div>
            <div class="checkbox">
              <div class="check-wrapper">
                <v-icon class="check">mdi-check</v-icon>
              </div>
              <v-card-text class="check-text">WDF*IDF analysis</v-card-text>
            </div>
            <pick-plan-button @clickBtn="clickBtn" />
          </v-card>
        </v-container>
        <v-container class="block d-flex justify-space-around">
          <v-card class="checkbox-card" elevation="0">
            <v-card-title class="checkbox-card-title"
              >Rank Tracking</v-card-title
            >
            <div class="checkbox">
              <div class="check-wrapper">
                <v-icon class="check">mdi-check</v-icon>
              </div>
              <v-card-text class="check-text"
                >Monitor your most important keywords.</v-card-text
              >
            </div>
            <div class="checkbox">
              <div class="check-wrapper">
                <v-icon class="check">mdi-check</v-icon>
              </div>
              <v-card-text class="check-text"
                >See the ranking development of you projects</v-card-text
              >
            </div>
            <pick-plan-button @clickBtn="clickBtn" />
          </v-card>
          <v-img
            src="../assets/rankTracker.png"
            max-height="360"
            max-width="360"
          />
        </v-container>
      </v-container>
    </v-container>
    <v-snackbar v-model="snackbar" top>
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<script>
import PriceCard from "../components/PriceCard.vue";
import PickPlanButton from "../components/PickPlanButton.vue";
export default {
  components: {
    PriceCard,
    PickPlanButton,
  },
  data() {
    return {
      switchValue: false,
      snackbar: false,
      snackbarText: `Something went wrong...`,
      cards: [
        {
          id: 1,
          greenText: "",
          title: "Starter",
          price: "$29",
          oldPrice: "$29",
          yearlyPrice: "$19",
          projects: "1",
          users: "1",
          circle1: "mdi-checkbox-blank-circle",
          circle2: "mdi-checkbox-blank-circle-outline",
          circle3: "mdi-checkbox-blank-circle-outline",
          competitor: "2",
          keyword: "500",
          site: "5k",
          search: "1",
          seo: "",
          customer: "",
          footerText:
            "Best for small and micro businesses with none to little SEO knowledge or web professionals serving them.",
        },
        {
          id: 2,
          greenText: "MOST POPULAR",
          title: "Pro",
          price: "$99",
          oldPrice: "$99",
          yearlyPrice: "$69",
          projects: 5,
          users: 1,
          circle1: "mdi-checkbox-blank-circle",
          circle2: "mdi-checkbox-blank-circle",
          circle3: "mdi-checkbox-blank-circle-outline",
          competitor: 3,
          keyword: "2,500",
          site: 10,
          search: 10,
          seo: "",
          customer: "",
          footerText:
            "Web professionals, medium businesses and In-house SEO managers with little to advanced SEO knowledge.",
        },
        {
          id: 3,
          greenText: "",
          title: "Agency",
          price: "$219",
          oldPrice: "$219",
          yearlyPrice: "$199",
          projects: 30,
          users: 5,
          circle1: "mdi-checkbox-blank-circle",
          circle2: "mdi-checkbox-blank-circle",
          circle3: "mdi-checkbox-blank-circle",
          competitor: 6,
          keyword: "5,000",
          site: 50,
          search: "Unlimited",
          seo: "",
          customer: "",
          footerText: "Best option for small and medium agencies offering SEO.",
        },
      ],
    };
  },
  methods: {
    clickBtn: function () {
      setTimeout(() => (this.snackbar = true), 2000);
    },
  },
};
</script>

<style>
.wrapper {
  font-family: Source Sans Pro;
  color: #05122d;
  margin-top: 0px;
}
.page-title {
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 50px;
  line-height: 63px;
  color: #05122d;
}
.page-subtitle {
  font-family: Source Sans Pro;
  font-size: 16px;
  line-height: 166%;
  color: #05122d;
  opacity: 0.4;
}
/* switch */
.v-input.theme--light.v-input--switch .v-input--switch__track {
  color: #3366ff !important;
  opacity: 1;
}
.v-input.theme--light.v-input--switch .v-input--switch__track .primary--text {
  color: #3366ff !important;
  opacity: 1;
}
.theme--light.v-input--switch .v-input--switch__thumb {
  color: white;
}
.theme--light.v-input--switch .v-input--switch__thumb.primary--text {
  color: white !important;
}
.v-input--selection-controls__ripple:before {
  color: #3366ff;
}
.switcher-text {
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 14px;
  line-height: 166%;
  color: #05122d;
}
.switcher-text.text-grey {
  opacity: 0.4;
}
.switcher-text-green {
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #33b768;
  padding: 1px 4px;
  background: rgba(51, 183, 104, 0.08);
  border-radius: 2px;
}
/* cards */
.card-wrapper {
  width: 1240px;
  background-color: #f5f6f7;
}
.card-left.theme--light.v-card {
  margin-right: 100px;
  padding-top: 170px;
  width: 200px;
  background-color: #f5f6f7;
}
.card-left-text {
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #05122d;
  opacity: 0.4;
}
/* bottom */
.bottom-blocks {
  max-width: 1000px;
}
.bottom-blocks .theme--light.v-card {
  background-color: #f5f6f7;
}
.checkbox-card-title {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
}
/* checkbox */
.checkbox {
  display: flex;
  align-items: center;
  margin-left: 16px;
}
.check-text {
  font-family: Source Sans Pro;
  font-size: 14px;
  line-height: 166%;
  color: #05122d;
  opacity: 0.6;
}
.check-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: rgba(51, 102, 255, 0.08);
}
.check.v-icon.v-icon {
  color: #3366ff;
  font-size: 20px;
}
</style>