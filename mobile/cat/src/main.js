/*
 * @Author: 方家亮
 */
import Vue from 'vue'
import App from './App.vue'


import "lib-flexible/flexible";
import { Button } from 'vant';
import VConsole from 'vconsole';

const vConsole = new VConsole();




Vue.use(Button);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
