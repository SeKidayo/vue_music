<template>
  <div class="index">
    <el-carousel :interval="5000" type="card" height="167px">
      <el-carousel-item v-for="item in bannerURL" :key="item">
        <h3 class="medium">
          <img :src="item" alt="bannerIMG" class="banner" />
        </h3>
      </el-carousel-item>
    </el-carousel>
    <div class="box">
      <div class="title">
        <span @click="handleTo">推荐歌单</span>
      </div>
      <el-divider></el-divider>
      <div class="playlists">
        <div v-for="item in playlists" :key="item.id">
          <el-card shadow="hover">
            <img :src="item.coverImgUrl" alt="playlist" class="coverimg">
            <div class="listname">{{item.name}}</div>
          </el-card>
        </div>
      </div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>6</div>
      <div>6</div>
      <div>6</div>
      <div>6</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>6</div>
      <div>6</div>
      <div>6</div>
      <div>6</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>6</div>
      <div>6</div>
      <div>6</div>
      <div>6</div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getBanner, getHotPL } from '../../../../network/getInfo'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      bannerURL: [],
      // 推荐10个歌单数组
      playlists: []
    }
  },
  // 计算属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // 获取轮播图数据
    bannerInit () {
      getBanner().then(res => {
        // console.log(res)
        if (res.code !== 200) return this.$message.error('获取信息失败￣へ￣')
        this.bannerURL = res.banners.map(item => {
          return item.imageUrl
        })
      })
    },
    // 获取热门歌单
    hotPlaylist (order, limit) {
      getHotPL(order, limit).then(res => {
        if (res.code !== 200) return this.$message.error('获取信息失败￣へ￣')
        console.log(res)
        this.playlists = res.playlists
      })
    },
    // 推荐歌单 跳转
    handleTo () {
      this.$router.push('/music/playerlists')
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.bannerInit()
    this.hotPlaylist('hot', 10)
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () { },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
// @import url(); 引入公共css类
.index {
  // 有了高度才有滚动条
  height: 100%;
  overflow: scroll;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  // line-height: 175px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner {
  width: 100%;
  height: 100%;
}
.box {
  margin: 0 40px;
}
.title {
  text-align: left;
}
.title span:hover {
  cursor: pointer;
  color: #79bbff;
}
.playlists {
  display: flex;
  justify-content:  space-between;
  flex-wrap: wrap;
  .coverimg {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  .listname {
    font-size: 14px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
