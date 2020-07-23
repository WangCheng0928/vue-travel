<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphalist'
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/variables.styl';
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.6rem
    right 0
    bottom 0
    width .4rem
    .item
      color $bgColor
      line-height .4rem
      text-align center
</style>
