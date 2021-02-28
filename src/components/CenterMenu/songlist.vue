<!--  -->
<template>
  <div class="songslist">
    <div class="abstract">
      <div class="coverimg">
        <img :src="playlistAbstract.coverImgUrl" alt="coverimg">
      </div>
      <div class="description">
        <div class="playlisttitle">
          <el-tag type="danger" size="small" color="#eee" hit>歌单</el-tag>
          <h2>{{playlistAbstract.name}}</h2>
        </div>
        <div class="createdInfo">
            <img :src="playlistAbstract.creator.avatarUrl" alt="avator" class="avatar">
            <span class="nickname">{{playlistAbstract.creator.nickname}}</span>
            <span class="createtime">{{playlistAbstract.createTime | formartTime}}创建</span>
        </div>
        <div class="buttons">
          <el-button type="danger" round size="medium" class="el-icon-video-play
">播放全部</el-button>
          <el-button round size="medium" class="el-icon-star-off">收藏</el-button>
          <el-button round size="medium" class="el-icon-share">分享</el-button>
          <el-button round size="medium" class="el-icon-bottom
">下载全部</el-button>
        </div>
        <div class="tags">
          <span>标签:</span>
          <span v-for="(item, index) in playlistAbstract.tags" :key="index">{{index === 0 ? item : '/' + item}}</span>
        </div>
        <div class="count">
          <span>歌曲数:{{playlistAbstract.trackCount}}</span>
          <span>播放量:{{playlistAbstract.playCount}}</span>
        </div>
        <div class="jianjie single-overflow-hidden">
          {{playlistAbstract.description}}
        </div>
      </div>
    </div>
    <div class="list"></div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getSonglistInfo } from '../../network/getInfo'
import { formartTime } from '../../assets/js/formarttime'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      // 歌单概要信息
      // playlistAbstract: {
      //   coverImgUrl: '',
      //   name: '',
      //   createTime: 0,
      //   avatarUrl: '',
      //   nickname: '',
      //   tags: [],
      //   trackCount: 0,
      //   playCount: 0,
      //   subscribedCount: 0,
      //   shareCount: 0,
      //   description: ''
      // }
      playlistAbstract: {
        // 不初始化会报错
        // 原因: 请求是异步的, 页面渲染时 数据 不一定会获取到,故而深层嵌套的对象需要预先定义
        // eg: obj.X (obj预先在data中声明, 访问X即使不声明也不会报错,只是会返回undefined)
        // but, obj.ziobj.x (obj预先声明,若此时ziobj未声明,则 访问x 相当于 obj.undefined.x 则会报错)
        // 单层下的属性不会出现此报错
        creator: {}
      }
      // 歌单歌曲列表
    }
  },
  // 过滤器
  filters: {
    formartTime: formartTime
  },
  // 计算属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // console.log(this.$route.query)
    getSonglistInfo(this.$route.query.sid).then(res => {
      if (res.code !== 200) return this.$message.error('获取歌单中歌曲信息失败￣へ￣')
      // this.playlistAbstract.coverImgUrl = res.playlist.coverImgUrl
      // this.playlistAbstract.name = res.playlist.name
      // this.playlistAbstract.createTime = res.playlist.createTime
      // this.playlistAbstract.nickname = res.playlist.creator.nickname
      // this.playlistAbstract.creatorAvatarUrl = res.playlist.creator.avatarUrl
      // this.playlistAbstract.tags = res.playlist.tags
      // this.playlistAbstract.trackCount = res.playlist.trackCount
      // this.playlistAbstract.playCount = res.playlist.playCount
      // this.playlistAbstract.subscribedCount = res.playlist.subscribedCount
      // this.playlistAbstract.shareCount = res.playlist.shareCount
      // this.playlistAbstract.description = res.playlist.description
      this.playlistAbstract = res.playlist
      console.log(this.playlistAbstract)
    })
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {},
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
// @import url(); 引入公共css类
.songslist {
  height: 100%;
  overflow: scroll;
}
.songslist .abstract {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-color: aqua;
  height: 260px;
}
.songslist .abstract .coverimg {
  margin: 25px;
  height: 85%;
}
.songslist .abstract .coverimg img {
  height: 100%;
  border-radius: 10px;
}
.songslist .abstract .description {
  flex: 1;
  height: 100%;
  width: 680px;
  margin-right: 20px;
  // .playlisttitle {
  //   margin: 13px 0 5px 0;
  // }
  .playlisttitle {
    font-weight: 700;
    height: 60px;
  }
  .playlisttitle .el-tag {
    font-size: 14px;
  }
  .playlisttitle h2 {
    line-height: 32px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
  }
  .createdInfo {
    font-size: 12px;
    margin-bottom: 10px;
  }
  .createdInfo .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .createdInfo .nickname {
    color: #4da0d9;
    cursor: pointer;
    margin: 0 8px;
  }
}
.songslist .list {
  height: 1000px;
  background-color: red;
}
</style>
