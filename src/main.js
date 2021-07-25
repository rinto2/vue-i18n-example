import Vue from 'vue'
import App from './App.vue'
import * as lang from './language/index'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(VueI18n)

console.log(lang.default)

const i18n = new VueI18n({
  locale: 'zh',
  messages: lang.default
})

Vue.prototype._i18n = i18n // 绑定到Vue全局对象，可在this中使用
new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
