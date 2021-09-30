
import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
console.log(router)
import "lib-flexible/flexible";
import { Button,Toast,Dialog,Overlay,ImagePreview,Lazyload,Swipe, SwipeItem,Grid, GridItem,Loading } from 'vant';
import VConsole from 'vconsole';



import "./assets/css/common.css"
//const vConsole = new VConsole();



Vue.use(ImagePreview);
Vue.use(Lazyload);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Overlay);
Vue.use(Loading);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')
