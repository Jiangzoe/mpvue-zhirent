import axios from 'axios'
import qs from 'qs'


axios.defaults.timeout = 30000;
axios.defaults.baseURL ='';
axios.defaults.headers.post[ 'Content-Type' ] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    let data = config.method === 'get' ? config.params : qs.stringify(config.data)
    wx.request({
      url:config.url,
      method:config.method,
      data:data,
      success:(res)=>{ 
        return resolve(res)
      },
      fail:(err)=>{
        return reject(err)
      }
    })
  })
}
//请求拦截器
axios.interceptors.request.use(function ( request ) {
  // console.log(request) //请求成功
  return request
}, function ( error ) {
  // console.log(error); //请求失败
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function ( response ) {
  // console.log(response.data.data) //响应成功
  return response;
}, function ( error ) {
  // console.log(error); //响应失败
  return Promise.reject(error);
});


export function get (url,params) {
  return axios({
    method:'get',
    url:url,
    params:params
  })
}
