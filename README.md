## Web音乐播放器介绍

### 项目说明

1）服务器端：采用Node.js搭建的服务器，解决了同源政策的限制；通过在服务器端访问网易云音乐官方路由(axios方法)来获取数据。

其中，服务器端源代码Github地址：https://github.com/Binaryify/NeteaseCloudMusicApi

网易云音乐Node.js版API**操作文档**地址：https://binaryify.github.io/NeteaseCloudMusicApi/#/

2）客户端：采用Vue+element.js+VueRouter+axios等技术栈，完成Web音乐播放器的各项功能实现