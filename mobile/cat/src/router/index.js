/*
 * @Author: 方家亮
 */
import Vue from "vue";
import VueRouter from "vue-router"
Vue.use(VueRouter);


const routes = [
    {
        path:"/",
        name:"index",
        component:()=>
            import("../views/index")
        
    }
]



const router = new VueRouter({
    routes
})
console.log(router)
export default router;