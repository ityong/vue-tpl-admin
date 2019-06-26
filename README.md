# vue-manage-system #
<a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.8.2-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/lin-xin/vue-manage-system/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/lin-xin/vue-manage-system/releases">
    <img src="https://img.shields.io/github/release/lin-xin/vue-manage-system.svg" alt="GitHub release">
  </a>
  <a href="http://blog.gdfengshuo.com/example/work/#/donate">
    <img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
  </a>

基于Vue.js + Element UI 的后台管理系统解决方案。[线上地址](http://blog.gdfengshuo.com/example/work/)

本项目基于vue-cli3构建，

## 项目截图 ##
### 登录
![Image text]()

### 默认皮肤 ###
![Image text]()

### 浅绿色皮肤 ###
![Image text]()

## 赞赏
请作者喝杯咖啡吧！(微信号：)

![微信扫一扫]()

## 前言 ##
该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于vue.js,使用vue-cli@3.2.3脚手架快速生成项目目录，引用Element UI组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。
（已经升级到 vue-cli@3.2.3，请更新依赖）

## 功能 ##
- [x] Element UI
- [x] 登录/注销
- [x] Dashboard
- [x] 表格
- [x] Tab选项卡
- [x] 表单
- [x] 图表 :bar_chart:
- [x] 富文本编辑器
- [x] markdown编辑器
- [x] 图片拖拽/裁剪上传
- [x] 支持切换主题色 :sparkles:
- [x] 列表拖拽排序
- [x] 权限测试
- [x] 404 / 403
- [x] 三级菜单
- [x] 自定义图标
- [x] 可拖拽弹窗
- [x] 国际化

## 安装步骤 ##
```
git clone https://github.com/lin-xin/vue-manage-system.git      // 把模板下载到本地
cd vue-manage-system    // 进入模板目录
npm install         // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn

// 开启服务器，浏览器访问 http://localhost:8080
npm run serve

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build
```
## 组件使用说明与演示 ##

### vue-schart ###
vue.js封装sChart.js的图表组件。访问地址：[vue-schart](https://github.com/linxin/vue-schart)
<p><a href="https://www.npmjs.com/package/vue-schart"><img src="https://img.shields.io/npm/dm/vue-schart.svg" alt="Downloads"></a></p>

```html
<template>
    <div>
        <schart  class="wrapper"
				:canvasId="canvasId"
				:type="type"
				:data="data"
				:options="options"
		></schart>
    </div>
</template>
	
<script>
    import Schart from 'vue-schart';        // 导入Schart组件
    export default {
        data: function(){
            return {
                canvasId: 'myCanvas',       // canvas的id
                type: 'bar',                // 图表类型
                data: [
                    {name: '2014', value: 1342},
                    {name: '2015', value: 2123},
                    {name: '2016', value: 1654},
                    {name: '2017', value: 1795},
                ],
                options: {                  // 图表可选参数
                    title: 'Total sales of stores in recent years'
                }
            }
        },
        components: {
            Schart
        }
    }
</script>
```