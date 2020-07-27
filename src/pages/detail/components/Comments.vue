<template>
  <div class="comments">
    <div class="comments-title">用户评论</div>
    <div class="coments-content border-bottom">
      <div class="score">
        <span class="stars">★★★★★</span>
        <span class="username">莉莉</span>
        <span class="comments-time">2020-07-06</span>
      </div>
      <p class="content-message"
         ref="comments1">
        优点：温泉地方够大，设计合理，而且温泉池很多，园区景色也挺好的。十一人不多，因为我们是上午去的，而且去的那天天气很热所以没多少人。还好上午不是一直艳阳高照，阴了好一阵。让孩子们玩得非常开心。冲浪池很好玩，温泉水也干净。热床和八汤馆的地热躺椅特别舒服，泡各种中药温泉，再躺着休息会，很不错，推荐。下午出来的时候人就感觉多一些了。建议在外面买好泳衣再进去，小孩子最好买个游泳圈，安全省心。
        缺点：1,前台接待服务水平和沟通能力需要好好提高一下，在去哪儿买了5张票，前台一开始说只能查到2张，后来又说查不到没有码，所有的都进不了，有任何问题问前台，前台都说，哪买的票就跟哪个网站客服联系，很是敷衍，反正就是跟他们没关系啦，他们前台只懂在前台扫码买的票，表达的意思就是想进就只能退票扫码再买贵的票。除了一个客服人员业务能力感觉强点，态度耐心点，其他不是嫌麻烦就是自己也不懂，完全不学习现在各大合作旅游售票平台的相关业务吗？自己不懂还很是嫌弃平台卖便宜了少賺了，现在年轻人谁不是在各大平台买票？只看到别人优惠了，没看到带来的巨大人流量和便利。只想着自己方便，不想方便游客，前台接待这么重要的岗位服务意识真是不足啊！！最后跟去哪儿客服联系，4张票入园成功了，又在前台通过微信公众号买了一张，一群人耽误了好久才成功入园。去哪儿承诺我们退差价51，后来去哪客服电话倒是打过来了好几个，一开始说商家不同意退，我们据理力争后，最后说商家同意退了。去哪网服务态度还是很好的，起码比较有耐心一直过问跟进。2,温泉地方略偏，孝感开车过去一个半小时。
      </p>
      <div class="arrow-wrapper"
           @click="handleClick1">
        <div ref="arrow1"
             :class="showFullComments1?'iconfont northIconjiantouxia arrow-content-rotate': 'iconfont northIconjiantouxia arrow-content'"></div>
      </div>
      <div class="comments-imgs">
        <div class="img-wrapper"
             v-for="(item,index) of imgs"
             :key="index">
          <div class="img-container">
            <img class="img-item"
                 :src="item.url"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="coments-content border-bottom">
      <div class="score">
        <span class="stars">★★★★★</span>
        <span class="username">莉莉</span>
        <span class="comments-time">2020-07-06</span>
      </div>
      <p class="content-message"
         ref="comments2">
        优点：温泉地方够大，设计合理，而且温泉池很多，园区景色也挺好的。十一人不多，因为我们是上午去的，而且去的那天天气很热所以没多少人。还好上午不是一直艳阳高照，阴了好一阵。让孩子们玩得非常开心。冲浪池很好玩，温泉水也干净。热床和八汤馆的地热躺椅特别舒服，泡各种中药温泉，再躺着休息会，很不错，推荐。下午出来的时候人就感觉多一些了。建议在外面买好泳衣再进去，小孩子最好买个游泳圈，安全省心。
        缺点：1,前台接待服务水平和沟通能力需要好好提高一下，在去哪儿买了5张票，前台一开始说只能查到2张，后来又说查不到没有码，所有的都进不了，有任何问题问前台，前台都说，哪买的票就跟哪个网站客服联系，很是敷衍，反正就是跟他们没关系啦，他们前台只懂在前台扫码买的票，表达的意思就是想进就只能退票扫码再买贵的票。除了一个客服人员业务能力感觉强点，态度耐心点，其他不是嫌麻烦就是自己也不懂，完全不学习现在各大合作旅游售票平台的相关业务吗？自己不懂还很是嫌弃平台卖便宜了少賺了，现在年轻人谁不是在各大平台买票？只看到别人优惠了，没看到带来的巨大人流量和便利。只想着自己方便，不想方便游客，前台接待这么重要的岗位服务意识真是不足啊！！最后跟去哪儿客服联系，4张票入园成功了，又在前台通过微信公众号买了一张，一群人耽误了好久才成功入园。去哪儿承诺我们退差价51，后来去哪客服电话倒是打过来了好几个，一开始说商家不同意退，我们据理力争后，最后说商家同意退了。去哪网服务态度还是很好的，起码比较有耐心一直过问跟进。2,温泉地方略偏，孝感开车过去一个半小时。
      </p>
      <div class="arrow-wrapper"
           @click="handleClick2">
        <div ref="arrow2"
             :class="showFullComments2?'iconfont northIconjiantouxia arrow-content-rotate': 'iconfont northIconjiantouxia arrow-content'"></div>
      </div>
      <div class="comments-imgs">
        <div class="img-wrapper"
             v-for="(item,index) of imgs"
             :key="index">
          <div class="img-container">
            <img class="img-item"
                 :src="item.url"
                 alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailComments",
  data: function () {
    return {
      imgs: [
        {
          url: "https://mp-commentcp.qunarzz.com/mp_comment_mp_comment/1559415638641100214000000x79tsEB0B_D_640_10000.jpg_228x168_0199614d.jpg"
        },
        {
          url: "https://mp-commentcp.qunarzz.com/mp_comment_mp_comment/1559415638745100q14000000x1hco4CF1_D_640_10000.jpg_228x168_2b9d5fd3.jpg"
        },
        {
          url: "https://mp-commentcp.qunarzz.com/mp_comment_mp_comment/1559415639008100a14000000x1iiw1E27_D_640_10000.jpg_228x168_0aa74fe0.jpg"
        },
        {
          url: "https://mp-commentcp.qunarzz.com/mp_comment_mp_comment/1559415639214100514000000x2p6u52F6_D_640_10000.jpg_228x168_1ab5bcce.jpg"
        },
        {
          url: "https://mp-commentcp.qunarzz.com/mp_comment_mp_comment/1559415639541100u14000000x05yw1C75_D_640_10000.jpg_228x168_edf75d1f.jpg"
        },
      ],
      showFullComments1: false,
      showFullComments2: false
    }
  },
  methods: {
    handleClick1: function () {
      this.showFullComments1 = !(this.showFullComments1)
      if (this.showFullComments1) {
        this.$refs.comments1.style.overflow = "inherit"
        this.$refs.comments1.style.height = "auto"
      } else {
        this.$refs.comments1.style = {}
      }
    },
    handleClick2: function () {
      this.showFullComments2 = !(this.showFullComments2)
      if (this.showFullComments2) {
        this.$refs.comments2.style.overflow = "inherit"
        this.$refs.comments2.style.height = "auto"
      } else {
        this.$refs.comments2.style = {}
      }
    }
  }
}
</script>
<style scoped lang="stylus">
.comments
  .comments-title
    height 0.9rem
    line-height 0.9rem
    font-size 0.34rem
    padding-left 0.2rem
    color #000
  .coments-content
    .score
      display flex
      padding 0.2rem 0
      font-size 0.25rem
      .stars
        color red
        padding-left 0.2rem
      .username
        flex 1
        text-align right
        margin-right 0.1rem
        color #bbb
      .comments-time
        padding-right 0.2rem
        color #bbb
    .content-message
      padding 0 0.2rem
      height 2.1rem
      overflow hidden
      font-size 0.26rem
      line-height 0.36rem
    .arrow-wrapper
      text-align center
      .arrow-content
        text-align center
        font-size 0.45rem
        line-height 0.45rem
      .arrow-content-rotate
        text-align center
        font-size 0.45rem
        line-height 0.45rem
        transform rotate(-180deg)
    .comments-imgs
      margin 0.2rem 0 0.1rem 0
      position relative
      zoom 1
      overflow hidden
      .img-wrapper
        float left
        width 33.33%
        margin-bottom 0.1rem
        .img-container
          margin-left 0.07rem
          margin-right 0.07rem
          .img-item
            width 100%
</style>
