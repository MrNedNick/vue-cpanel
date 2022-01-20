<template>
  <v-main>
    <v-container class="wrapper mt-15">
      <v-container class="top-wrapper d-flex align-center flex-column">
        <h1 class="page-title">Get discovered online.</h1>
        <span class="page-subtitle"
          >We support beginners at every step of their SEO journey.</span
        >

        <v-switch class="mt-16 mb-6 switcher" inset label="Switch" />
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
        v-for="card in cards" 
        :key="card.id"
        :price="card.price"
        :projects="card.projects"
        :users="card.users"
        :reporting="card.reporting"
        :competitor="card.competitor"
        :keyword="card.keyword"
        :site="card.site"
        :search="card.search"
        :seo="card.seo"
        :customer="card.customer"
        :footerText="card.footerText"
        />

        <!-- <v-hover v-slot:default="{ hover }">
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
              <v-icon class="card-circle mr-1"
                >mdi-checkbox-blank-circle</v-icon
              >
              <v-icon class="card-circle mr-1"
                >mdi-checkbox-blank-circle</v-icon
              >
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
        </v-hover>

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
              <v-icon class="card-circle mr-1"
                >mdi-checkbox-blank-circle</v-icon
              >
              <v-icon class="card-circle mr-1"
                >mdi-checkbox-blank-circle</v-icon
              >
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
        </v-hover> -->
      </v-container>

      <v-container class="bottom-blocks mt-16">
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
            <v-card-title class="checkbox-card-title"
              >Rank Tracking</v-card-title
            >
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
import PriceCard from "../components/PriceCard.vue";

export default {
  components: {
    PriceCard,
  },
  data() {
    return {
      checkbox: true,
      cards: [
        {
          id: 1,
          price: "$29",
          projects: '1',
          users: '1',
          reporting: "",
          competitor: '2',
          keyword: '500',
          site: "5k",
          search: '1',
          seo: "",
          customer: "",
          footerText:
            "Best for small and micro businesses with none to little SEO knowledge or web professionals serving them.",
        },
        {
          id: 2,
          price: '$30',
          projects: 1,
          users: 1,
          reporting: 1,
          competitor: 1,
          keyword: 1,
          site: 1,
          search: 1,
          seo: 1,
          customer: 1,
          footerText: 1,
        },
        {
          id: 3,
          price: '$31',
          projects: 1,
          users: 1,
          reporting: 1,
          competitor: 1,
          keyword: 1,
          site: 1,
          search: 1,
          seo: 1,
          customer: 1,
          footerText: 1,
        },
      ],
    };
  },
};
</script>

<style scoped>
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

/* .v-application .primary--text {
    color: white !important;
    caret-color: white !important;
 } */
.card-wrapper {
  width: 1240px;
}
/* card left */
.card-left {
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
/* card */
/*
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
} */
/* bottom */
.bottom-blocks {
  max-width: 1000px;
}
.checkbox-card {
  background-color: #f5f6f7;
}
.checkbox-card-title {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
}
</style>