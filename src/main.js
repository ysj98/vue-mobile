// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { http } from './JS/interceptor'
import api from './JS/api'
import utils from './JS/utils'
import vConsole from './JS/vconsole'
import showTip from './components/showTip'
import Dialog from './components/dialog'
import { LoadingPlugin } from 'vux'
import 'lib-flexible'

import VueScroller from 'vue-scroller'

Vue.use(VueScroller)
Vue.use(LoadingPlugin)
Vue.use(api)
Vue.use(utils)
Vue.use(vConsole)

Vue.prototype.$showTip = showTip
Vue.prototype.$dialog = Dialog
Vue.prototype.axios = http

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  var token = sessionStorage.getItem('token')
  if (process.env.NODE_ENV !== 'production') {
    next()
  } else {
    if (!token) {
      http({
        method: 'POST',
        url: '/mwp/token/api/getAccessToken',
        data: {
          clientId: Vue.prototype.util.queryParse(window.location.href).client_id,
          ticket: Vue.prototype.util.queryParse(window.location.href).ticket
        }
      }).then(res => {
        if (res.data.resultCode === 20000) {
          var timeOut = parseInt(new Date().getTime() / 1000) + res.data.resultData.expireTime
          sessionStorage.setItem('timeOut', timeOut)
          sessionStorage.setItem('token', res.data.resultData.token)
        }
      })
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
