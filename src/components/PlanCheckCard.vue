<template>
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
    <pick-plan-button />
  </v-card>
</template>

<script>
import PickPlanButton from "./PickPlanButton.vue"

export default {
    components: {
        PickPlanButton,
    },
    checkCards: [
        {
            id: 1,
            title: 'Keywords',
            text1: 'Analyze the terms that are important to you & your competition.',
            text2: 'Identify opportunity keywords.',
            text3: ''
        },
        {
            id: 2,
            title: 'Site Audit',
            text1: 'Optimize technical implementation.',
            text2: 'Avoid technical errors.',
            text3: 'WDF*IDF analysis'
        },
        {
            id: 3,
            title: 'Rank Tracking',
            text1: 'Monitor your most important keywords.',
            text2: 'See the ranking development of you projects',
            text3: ''
        }
    ]
};
</script>

<style lang='scss'>
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