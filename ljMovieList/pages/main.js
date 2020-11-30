import Vue from 'vue'
import App from '../pages/index.vue'
import router from './main'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default router
