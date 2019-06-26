import Vue from 'vue';
import Router from 'vue-router';
import {developerRoutes} from './developerTpl'

Vue.use(Router);

let routers = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/',
        component: resolve => require(['../components/layout/Home.vue'], resolve),
        meta: { title: '自述文件' },
        children:[
            {
                path: '/dashboard',
                component: resolve => require(['../components/layout/Dashboard.vue'], resolve),
                meta: { title: '系统首页' }
            },
            {
                path: '/tags-list',
                component: resolve => require(['../views/tags/List.vue'], resolve),
                meta: { title: '标签列表' }
            },
        ]
    },
    {
        path: '/login',
        component: resolve => require(['../components/developerTpl/Login.vue'], resolve)
    },
    // {
    //     path: '*',
    //     redirect: '/404'
    // }
];
//routers[1].children.push(developerRoutes)
//routers[1].children.push(developerRoutes);
routers[1].children = routers[1].children.concat(developerRoutes)


window.console.log(routers)




export default new Router({
    routes: routers
})
