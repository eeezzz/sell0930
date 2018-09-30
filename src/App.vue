<template>
  <div id="app">
    <!-- 頭部 -->
    <Myheader :poiInfo="poiInfo"></Myheader>

    <!-- 導航 -->
    <Mynav></Mynav>

    <!-- 主題內容 -->
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Myheader from './components/Header/Header'
import Mynav from './components/Nav/Nav'

export default {
  name: 'App',
  data() {
    return {
      // header組件需要的信息（商家信息)
      poiInfo: {}
    }
  },
  created() {
    var _this = this
    this.$axios.get('api/goods')
      .then(function(response) {
        var dataSource = response.data
        // console.log(dataSource)
        if (dataSource.code === 0) {
          _this.poiInfo = dataSource.data.poi_info
          // console.log(_this.poiInfo)
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  components: {
    Myheader,
    Mynav
  }
}
</script>

<style>
#app {
}
</style>
