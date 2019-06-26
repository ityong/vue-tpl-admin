//开发者模板路由
export const developerRoutes = [
    {
        path: 'developer-tpl/dashboard',
        component: resolve => require(['../components/developerTpl/Dashboard.vue'], resolve),
        meta: { title: '系统首页' }
    },
    {
        path: '/developer-tpl/icon',
        component: resolve => require(['../components/developerTpl/Icon.vue'], resolve),
        meta: { title: '自定义图标' }
    },
    {
        path: '/developer-tpl/table',
        component: resolve => require(['../components/developerTpl/BaseTable.vue'], resolve),
        meta: { title: '基础表格' }
    },
    {
        path: '/developer-tpl/tabs',
        component: resolve => require(['../components/developerTpl/Tabs.vue'], resolve),
        meta: { title: 'tab选项卡' }
    },
    {
        path: '/developer-tpl/form',
        component: resolve => require(['../components/developerTpl/BaseForm.vue'], resolve),
        meta: { title: '基本表单' }
    },
    {
        // 富文本编辑器组件
        path: '/developer-tpl/editor',
        component: resolve => require(['../components/developerTpl/VueEditor.vue'], resolve),
        meta: { title: '富文本编辑器' }
    },
    {
        // markdown组件
        path: '/developer-tpl/markdown',
        component: resolve => require(['../components/developerTpl/Markdown.vue'], resolve),
        meta: { title: 'markdown编辑器' }
    },
    {
        // 图片上传组件
        path: '/developer-tpl/upload',
        component: resolve => require(['../components/developerTpl/Upload.vue'], resolve),
        meta: { title: '文件上传' }
    },
    {
        // vue-schart组件
        path: '/developer-tpl/charts',
        component: resolve => require(['../components/developerTpl/BaseCharts.vue'], resolve),
        meta: { title: 'schart图表' }
    },
    {
        // 拖拽列表组件
        path: '/developer-tpl/drag',
        component: resolve => require(['../components/developerTpl/DragList.vue'], resolve),
        meta: { title: '拖拽列表' }
    },
    {
        // 拖拽Dialog组件
        path: '/developer-tpl/dialog',
        component: resolve => require(['../components/developerTpl/DragDialog.vue'], resolve),
        meta: { title: '拖拽弹框' }
    },
    {
        // 国际化组件
        path: '/developer-tpl/i18n',
        component: resolve => require(['../components/developerTpl/I18n.vue'], resolve),
        meta: { title: '国际化' }
    },
    {
        // 权限页面
        path: '/developer-tpl/permission',
        component: resolve => require(['../components/developerTpl/Permission.vue'], resolve),
        meta: { title: '权限测试', permission: true }
    },
    {
        path: '/developer-tpl/404',
        component: resolve => require(['../components/developerTpl/404.vue'], resolve),
        meta: { title: '404' }
    },
    {
        path: '/developer-tpl/403',
        component: resolve => require(['../components/developerTpl/403.vue'], resolve),
        meta: { title: '403' }
    }
];


//开发者模板菜单
export const developerMenu = {
    icon: 'el-icon-lx-home',
    index: '9999999',
    title: '开发者模板',
    subs: [
        {
            icon: 'el-icon-lx-home',
            index: '/developer-tpl/dashboard',
            title: '系统首页'
        },

        {
            icon: 'el-icon-lx-cascades',
            index: '/developer-tpl/table',
            title: '基础表格'
        },
        {
            icon: 'el-icon-lx-copy',
            index: '/developer-tpl/tabs',
            title: 'tab选项卡'
        },
        {
            icon: 'el-icon-lx-calendar',
            index: '3',
            title: '表单相关',
            subs: [
                {
                    index: '/developer-tpl/form',
                    title: '基本表单'
                },
                {
                    index: '/developer-tpl/editor',
                    title: '富文本编辑器'
                },
                {
                    index: '/developer-tpl/markdown',
                    title: 'markdown编辑器'
                },
                {
                    index: '/developer-tpl/upload',
                    title: '文件上传'
                }
            ]
        },
        {
            icon: 'el-icon-lx-emoji',
            index: '/developer-tpl/icon',
            title: '自定义图标'
        },
        {
            icon: 'el-icon-pie-chart',
            index: '/developer-tpl/charts',
            title: 'schart图表'
        },
        {
            icon: 'el-icon-rank',
            index: '6',
            title: '拖拽组件',
            subs: [
                {
                    index: '/developer-tpl/drag',
                    title: '拖拽列表',
                },
                {
                    index: '/developer-tpl/dialog',
                    title: '拖拽弹框',
                }
            ]
        },
        {
            icon: 'el-icon-lx-global',
            index: '/developer-tpl/i18n',
            title: '国际化功能'
        },
        {
            icon: 'el-icon-lx-warn',
            index: '7',
            title: '错误处理',
            subs: [
                {
                    index: '/developer-tpl/permission',
                    title: '权限测试',
                    subs: [
                        {
                            index: '/developer-tpl/404',
                            title: '404页面'
                        }
                    ]
                },
                {
                    index: '/developer-tpl/404',
                    title: '404页面'
                }
            ]
        }
    ]
}


