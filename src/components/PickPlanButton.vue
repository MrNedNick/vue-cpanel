<template>
  <div class="plan-btn-wrapper">
    <v-btn
      class="plan-btn ml-5 mt-5 mb-10 text-capitalize"
      outlined
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
    >
      Pick Plan
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    mouseOver: function () {
      this.$emit("mouseOver");
    },
    mouseLeave: function () {
      this.$emit("mouseLeave");
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
.plan-btn.theme--light.v-btn:hover .v-btn__content{
    color: white;
}
.v-btn:before {
    background-color: #3366FF;
}
</style>
