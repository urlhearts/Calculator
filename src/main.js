import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    //element -ui 有几个得挂在原型上
  },
  store,
  router
}).$mount('#app')
