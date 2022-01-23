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
export default {};
</script>

<style lang='scss'>
</style>