import Vue from 'vue'
import App from './App.vue'
import VueConfirmDialog from 'vue-confirm-dialog'

Vue.config.productionTip = false
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

new Vue({
  render: h => h(App),
}).$mount('#app')
