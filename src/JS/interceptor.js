import axios from 'axios'
import vm from '../main'
// import Vue from 'vue'

/* 全局默认配置 */
const PRODUCT_URL = 'https://baidu.com'
const MOCK_URL = 'http:/mock.com'
var http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? PRODUCT_URL : MOCK_URL
})
/* 请求拦截器 */
http.interceptors.request.use(async config => {
  config.headers['Content-Type'] = 'application/json'
  if (sessionStorage.getItem('timeOut')) {
    var timeOut = parseInt(sessionStorage.getItem('timeOut'))
    var nowTime = new Date().getTime() / 1000
    var token = ''
    if (timeOut < nowTime && config.url.indexOf('refreshAccessToken') < 0) {
      await getNewToken()
      token = await sessionStorage.getItem('token')
      config.headers['Authorization'] = token
      if (config.loading !== false) {
        vm.$vux.loading.show({
          text: ''
        })
      }
      return config
    } else {
      token = sessionStorage.getItem('token')
      config.headers['Authorization'] = token
      if (config.loading !== false) {
        vm.$vux.loading.show({
          text: ''
        })
      }
      return config
    }
  } else {
    if (config.loading !== false) {
      vm.$vux.loading.show({
        text: ''
      })
    }
    return config
  }
}, error => {
  vm.$vux.loading.hide()
  return Promise.reject(error)
})
/* 响应拦截器 */
http.interceptors.response.use(response => {
  vm.$vux.loading.hide()
  if (response && response.data.resultCode === 50008) {
    sessionStorage.removeItem('token')
    vm.$router.replace({
      path: '/error'
    })
  }
  return response
}, error => {
  vm.$vux.loading.hide()
  return Promise.reject(error)
})

async function getNewToken () {
  await axios({
    method: 'POST',
    url: 'https:/baidu/token/api/refreshAccessToken',
    data: {
      expiredToken: sessionStorage.getItem('token')
    }
  }).then(res => {
    if (res.data.resultCode === 20000) {
      var timeOut = parseInt(new Date().getTime() / 1000) + res.data.resultData.expireTime
      sessionStorage.setItem('timeOut', timeOut)
      sessionStorage.setItem('token', res.data.resultData.token)
    }
  })
}
export { http, PRODUCT_URL }
