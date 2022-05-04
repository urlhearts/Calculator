//配置路由的地方
import VueRouter from 'vue-router'
import store from '../store'
//先把vue原型的push方法先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replace
//第一个参数告诉原来的push往哪里跳
//第二个参数是成功的回调
//第三个参数是失败的回调

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}
//取消replace 和 push 造成重复的bug......很重要  面试可能会问

const router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { y: 0 }
    },
    routes:[
            {
                path:'/',
                redirect:'HelloWorld'
            },
            {
                path:'/HelloWorld',
                name:'HelloWorld',
                component:() =>import('../pages/HelloWorld'),
            },
            {
                path:'/Calculator',
                name:'Calculator',
                component:() =>import('../pages/Calculator'),
            },
            {
                path:'/DeepLearning',
                name:'DeepLearning',
                component:() =>import('../pages/DeepLearning'),
            },
    ]
})

export default router