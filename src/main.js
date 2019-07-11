import Vue from 'vue'
import App from './App'
import axios from 'axios'
import {get} from './utils/axios'

// 将get请求挂载上去
Vue.prototype.$get=get;

Vue.prototype.getList = function (){
  wx.showLoading({
    title:'加载中'
  }),
    this.$get("https://www.easy-mock.com/mock/5d17149edc925c312db9c9ea/zhirent/zhirent")
    .then((res) => {
      if (res.data.errno === 0) {
        this.active = res.data.data.active;
        this.sponsors = res.data.data.sponsors
      }
    })
    wx.hideLoading()
}

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()