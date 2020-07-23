<template>
  <div class="search">
    <input class="searchInput" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/variables.styl';
  .search
    height .72rem
    background $bgColor
    padding 0 .1rem
    .searchInput
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      color #666
      padding .1rem
      box-sizing border-box
      border-radius .06rem
</style>
