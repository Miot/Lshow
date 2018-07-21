// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import fastclick from 'fastclick'
import commoninterface from './commoninterface'

// axios是ajax数据请求, MintUI是饿了么的UI框架, fastclick是优化移动端点击延迟, commoninterface是放置ajax请求的文件
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

fastclick.attach(document.body)
Vue.use(MintUI)
Vue.use(commoninterface)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
