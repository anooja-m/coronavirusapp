// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTableDynamic from 'vue-table-dynamic'
import axios from "axios"
window.axios=axios
Vue.use(VueTableDynamic)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  components: { App },
  template: '<App/>'
})
