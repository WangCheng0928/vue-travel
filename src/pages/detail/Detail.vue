<template>
  <div>
    <Banner></Banner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner';
import DetailHeader from './components/Header';
import DetailList from './components/List';
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader,
    DetailList
  },
  data: function() {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [{ title: '成人三馆联票-某一连锁店' }]
            },
            { title: '成人五馆联票' }
          ]
        },
        { title: '学生票' },
        { title: '儿童票' },
        { title: '特惠票' }
      ]
    };
  }
};
</script>
<style scoped lang="stylus">
.content
  height 50rem
</style>
