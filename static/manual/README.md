<!--
 * @Author: ruixin
 * @Date: 2021-07-27 08:47:15
 * @LastEditors: ruixin
 * @LastEditTime: 2021-07-27 10:04:56
 * @Description:
-->

##使用方法

###全局安装 vue-cli

`npm install -g @vue/cli`

###创建 uni-app

`vue create -p dcloudio/uni-preset-vue my-project`

###使用自定义模板

由于本地的 gitlab 拉取不到模板，暂时先用 github 拉取

自定义模板地址（完整复制即可）

`direct:https://github.com/monkeySu/unionman_uni.git`

vue-cli 使用拉取仓库的插件是 https://www.npmjs.com/package/download-git-repo 可以了解一下

###安装额外的 npm 包

####sass & sass-loader
**https://www.sass.hk/**

####dayjs
**https://dayjs.fenxianglu.cn/**

####推荐 ui 库 uview
**https://www.uviewui.com/components/intro.html**

####内置 uni-app 拓展组件库
**https://uniapp.dcloud.io/component/README?id=uniui**
**https://ext.dcloud.net.cn/plugin?id=55**

使用 uni_modules 模式引入（目录地址/src/uni_modules)

####内置 webview 的 map 模块

**引入页面要使用 nvue 嵌入，页面中如果有高层级的组件，也要使用 nvue 编写。并使用子窗口引入页面中，子窗口与普通页面的事件交互要使用 uni.$emit 与uni.$on**

**nvue: https://uniapp.dcloud.io/nvue-outline**
**原生子窗口: https://uniapp.dcloud.io/collocation/pages?id=app-subnvues**
**https://ask.dcloud.net.cn/article/35948**

模块的路径是 src\hybrid\html\map.html
