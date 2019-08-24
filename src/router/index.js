import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import('../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import( '../components/page/index/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },



                //模板文件!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                {
                    path: '/tpl/icon',
                    component: () => import('../components/page/tpl/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/tpl/table',
                    component: () => import('../components/page/tpl/BaseTable.vue'),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tpl/tabs',
                    component: () => import('../components/page/tpl/Tabs.vue'),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/tpl/form',
                    component: () => import('../components/page/tpl/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/tpl/editor',
                    component: () => import('../components/page/tpl/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/tpl/markdown',
                    component: () => import('../components/page/tpl/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/tpl/upload',
                    component: () => import('../components/page/tpl/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/tpl/charts',
                    component: () => import('../components/page/tpl/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/tpl/drag',
                    component: () => import('../components/page/tpl/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/tpl/dialog',
                    component: () => import('../components/page/tpl/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: '/tpl/i18n',
                    component: () => import('../components/page/tpl/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/tpl/permission',
                    component: () => import('../components/page/tpl/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/tpl/404',
                    component: () => import('../components/page/tpl/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/tpl/403',
                    component: () => import('../components/page/tpl/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/tpl/donate',
                    component: () => import('../components/page/tpl/Donate.vue'),
                    meta: { title: '支持作者' }
                }
            ]
        },
        {
            path: '/tpl/login',
            component: () => import('../components/page/tpl/Login.vue')
        },
        {
            path: '*',
            redirect: '/tpl/404'
        }
    ]
});
