export default {
  install (Vue, options) {
    Vue.prototype.util = {
      /* url序列参数转化为对象 */
      queryParse (url) {
        if (url.indexOf('?') === -1) {
          return null
        }
        var str = url.split('?')[1].split('#')[0]
        var items = str.split('&')
        var result = {}
        var arr = []
        for (var i = 0; i < items.length; i++) {
          arr = items[i].split('=')
          result[arr[0]] = arr[1]
        }
        return result
      },
      queryParse1 (url) {
        if (url.indexOf('sourceid') === -1) {
          return null
        }
        var str = ''
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          str = url.split('?')[2]
        } else {
          str = url.split('?')[1].split('#')[0]
        }
        // var str = url.split('?')[2]
        var items = str.split('&')
        var result = {}
        var arr = []
        for (var i = 0; i < items.length; i++) {
          arr = items[i].split('=')
          result[arr[0]] = arr[1]
        }
        return result
      },
      /* 判断设备处于PC还是移动端 */
      mobileTest () {
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          /* 移动端 */
          return true
        } else {
          /* web端 */
          return false
        }
      },
      getToday (n) {
        var date = new Date()
        date.setDate(date.getDate() + n)
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        month = month < 10 ? '0' + month : month
        day = day < 10 ? '0' + day : day
        return year + '-' + month + '-' + day
      },
      getMonth () {
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        month = month < 10 ? '0' + month : month
        return year + '-' + month
      }
    }
  }
}
