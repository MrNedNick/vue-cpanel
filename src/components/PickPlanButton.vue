<template>
  <div class="plan-btn-wrapper">
    <v-btn
      class="plan-btn ml-5 mt-5 mb-10 text-capitalize"
      outlined
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"

      @click="clickBtn"
      :loading="loading"
      :disabled="loading"
    >
      Pick Plan
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
      loading: false,
    };
  },
  methods: {
    mouseOver: function () {
      this.$emit("mouseOver");
    },
    mouseLeave: function () {
      this.$emit("mouseLeave");
    },
    clickBtn: function () {
      this.loader = 'loading'

      this.$emit("clickBtn")
    }
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 2000);

      this.loader = null;
    },
  },
};
</script>

<style lang='scss'>
.plan-btn {
  width: 239px;
  height: 40px;
  border: 1px solid #3366ff;
  & .v-btn__content {
    color: #3366ff;
    font-family: Source Sans Pro;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }
}
.plan-btn.theme--light.v-btn:hover::before {
  opacity: 1;
}
.plan-btn.theme--light.v-btn:hover .v-btn__content {
  color: white;
}
.v-btn:before {
  background-color: #3366ff;
}

@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
