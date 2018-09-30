<template>

  <div class="header">
    <!-- 頂部通欄 -->
    <div class="top-wrapper">
      <div class="back-wrapper">
        <span class="icon-arrow_lift"></span>
      </div>

      <form class="search-wrapper">
        <span class="search-icon"></span>
        <input type="text" class="search-bar" placeholder="搜索店內商品">
      </form>

      <div class="more-wrapper">
        <a class="spelling-bt" herf="#">拼單</a>
        <div class="more-bt">
          <i class="s-radius"></i>
          <i class="s-radius"></i>
          <i class="s-radius"></i>
        </div>
      </div>
    </div>
    <!-- 主題內容 -->
    <div class="content-wapper">
      <div class="icon" :style="head_bg">
      </div>
      <div class="name">
        <h3>{{poiInfo.name}}</h3>
      </div>
      <div class="collect">
        <img src="../../../resource/img/star.png">
        <span>收藏</span>
      </div>
    </div>
    <!-- 公告內容 -->
    <div class="bulletin-wrapper">
      <img class="icon" v-if="poiInfo.discounts2" :src="poiInfo.discounts2[0].icon_url" />
      <span class="text" v-if="poiInfo.discounts2">{{poiInfo.discounts2[0].info}}</span>
      <div class="detail" v-if="poiInfo.discounts2" @click="showBulletin">
        {{poiInfo.discounts2.length}}個活動
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>

    <!-- 背景 -->
    <div class="bg-wrapper" :style="content_bg">
    </div>

    <!-- 公告詳請 -->
    <transition name="fade">
      <div class="bulletin-detail" v-show="isShow">
        <div class="detail-wrapper">
          <div class="main-wrapper" :style="detail_bg">
            <div class="icon" :style="head_bg"></div>
            <h3 class="name">{{ poiInfo.name }}</h3>
            <!-- 評價 -->
            <div class="score">
              <!-- <Star :score="poiInfo.wm_poi_score"></Star> -->
              <span>{{poiInfo.wm_poi_score}}</span>
            </div>
            <p class="tip">
              {{poiInfo.min_price_tip}} <i>|</i>
              {{poiInfo.shipping_fee_tip}}<i>|</i>
              {{poiInfo.delivery_time_tip}}
            </p>
            <p class="time">
              配送時間： {{ poiInfo.shipping_time }}
            </p>
            <div class="discounts">
              <p>
                <img v-if="poiInfo.discounts2" :src="poiInfo.discounts2[0].icon_url" alt="">
                <span v-if="poiInfo.discounts2" v-html="poiInfo.discounts2[0].info"></span>
              </p>
            </div>
          </div>
          <div class="close-wrapper">
            <span class="icon-close" @click="closeBulletin"></span>
          </div>
        </div>

      </div>
    </transition>
  </div>

</template>

<script>
export default {
  props: {
    poiInfo: {
      type: Object,
      // Object 的預設值要用function方式撰寫
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    content_bg() {
      return 'background-image: url(' + this.poiInfo.head_pic_url + ')'
    },
    head_bg() {
      return 'background-image: url(' + this.poiInfo.pic_url + ')'
    },
    detail_bg() {
      return 'background-image: url(' + this.poiInfo.poi_back_pic_url + ')'
    }
  },
  methods: {
    showBulletin() {
      this.isShow = true
    },
    closeBulletin() {
      this.isShow = false
    }
  }
}
</script>

<style scoped>
@import url('../../common/styles/style.css');
@import url('Header.css');
</style>
