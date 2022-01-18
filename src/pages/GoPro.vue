<template>
  <v-main>
    <v-container class="wrapper">
      <v-container class="d-flex align-center flex-column">
        <h1>Get discovered online.</h1>
        <span>We support beginners at every step of their SEO journey.</span>

        <v-switch
            inset
            label='Switch' />
      </v-container>
      <v-card
          class="mx-auto pl-8 pt-4"
          max-width="303"
          height="974"

      >
        <v-card-title class="d-flex flex-column">
          <span>Starter</span>
          <div>
            <span>$29</span>
            <span>/Month</span>
          </div>
        </v-card-title>

        <v-card-text>

        </v-card-text>

        <v-card-text>
          <div>Word of the Day</div>
          <p class="text-h4 text--primary">
            el·ee·mos·y·nar·y
          </p>
          <p>adjective</p>
          <div class="text--primary">
            relating to or dependent on charity; charitable.<br>
            "an eleemosynary educational institution."
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
              text
              color="teal accent-4"
              @click="reveal = true"
          >
            Learn More
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
          >
            <v-card-text class="pb-0">
              <p class="text-h4 text--primary">
                Origin
              </p>
              <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin
                eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn
                  text
                  color="teal accent-4"
                  @click="reveal = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>

    </v-container>
  </v-main>
</template>

<script>
export default {
  setup() {

  },
}
</script>

<style scoped>
.wrapper {
  margin-top: 152px;
}
</style>