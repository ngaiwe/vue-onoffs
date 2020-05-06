/*
 * @Author       : weiran92@xdf.cn
 * @Date         : 2020-05-06 13:56:57
 * @LastEditors  : weiran92@xdf.cn
 * @LastEditTime : 2020-05-06 13:59:28
 * @Description  : 描述信息
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '@/css/reset.css'
import OnOff from '@/components/onoff/OnOff.vue'
// 3
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

export {
  OnOff
}
