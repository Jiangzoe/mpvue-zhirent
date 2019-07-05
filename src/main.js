import Vue from 'vue'
import App from './App'
import axios from 'axios'
import qs from 'qs'

const baseUrl = process.env.NODE_ENV === 'development' ? 'https://www.baidu.com' : 'https://www.baidu.com'

axios.defaults.timeout = 30000
axios.defaults.baseURL = baseUrl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    let data = config.method === 'get' ? config.params : qs.stringify(config.data)
    // wx小程序 发起请求相应 log 就可以看到熟悉的返回啦
    wx.request({
      url: config.url,
      method: config.method,
      data: data,
      success: (res) => {
        return resolve(res)
      },
      fail: (err) => {
        return reject(err)
      }
    })
  })
}

// 请求拦截器
axios.interceptors.request.use(function (request) {
  // request.headers.token = 'token=11124654654687';
  // console.log(request) // 请求成功
  return request
}, function (error) {
  // console.log(error); // 请求失败
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log(response.data.data) // 响应成功
  return response
}, function (error) {
  // console.log(error); // 响应失败
  return Promise.reject(error)
})
//  将axios挂载上去
Vue.prototype.$http = axios
Vue.prototype.getList = function (){
  wx.showLoading({
    title:'加载中'
  }),
  this.$http
      .get("https://www.easy-mock.com/mock/5d17149edc925c312db9c9ea/zhirent/zhirent")
      .then((res) => {
        if (res.data.errno === 0) {
          this.active = res.data.data.active;
          this.sponsors = res.data.data.sponsors
          wx.hideLoading() 

         // 获取默认的主办方收藏列表
         for(let i = 0 ; i< this.sponsors.length;i++){
          this.collectList.push(false)
        }

          // 获取默认的活动收藏列表
          for(let i = 0 ;i < this.active.length; i++){
            this.interestList.push(false)
          }
        }
      })
}

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()