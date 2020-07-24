<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    cities: Object
  },
  data: function() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated: function() {
    this.startY = this.$refs['A'][0].offsetTop;
  },
  computed: {
    letters: function() {
      const letters = [];
      for (let item in this.cities) {
        letters.push(item);
      }
      return letters;
    }
  },
  name: 'CityAlphalist',
  methods: {
    handleLetterClick: function(e) {
      const letter = e.target.innerText;
      this.$emit('change', letter);
    },
    handleTouchStart: function() {
      this.touchStatus = true;
    },
    handleTouchMove: function(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]);
          }
        }, 10);
      }
    },
    handleTouchEnd: function() {
      this.touchStatus = false;
    }
  }
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/variables.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.6rem
  right 0
  bottom 0
  width 0.4rem
  touch-action none
  .item
    color $bgColor
    line-height 0.4rem
    text-align center
</style>
