
//顶级菜单
const topMenuMap = [
    {key:'index',name:'首页'},
    {key:'user',name:'人才'},
    {key:'sys',name:'系统'},
    {key:'tool',name:'页面模板'},
];
//子菜单
const slider = {
    index: [
        {
            icon: 'el-icon-loading',
            path: 'dashboard', //固定值其他页面有判断不能关闭此路由
            title: '管理中心面板'
        }
    ],
    user: [
        {
            icon: 'el-icon-date',
            path: 'tpl/table',
            title: '基础表格'
        }
    ],
    sys: [
        {
            icon: 'el-icon-s-order',
            path: '#',
            title: '分类管理',
            subs: [
                {
                    path: 'tpl/form',
                    title: '地区分类'
                },
                {
                    path: 'tpl/form',
                    title: '职位分类'
                },
                {
                    path: 'tpl/form',
                    title: '其他分类组'
                }
            ]
        },
    ],
    tool:[
        {
            icon: 'el-icon-date',
            path: 'tpl/table',
            title: '基础表格'
        },
        {
            icon: 'el-icon-guide',
            path: 'tpl/tabs',
            title: 'tab选项卡'
        },
        {
            icon: 'el-icon-film',
            path: '#',
            title: '表单相关',
            subs: [
                {
                    path: 'tpl/form',
                    title: '基本表单'
                },
                {
                    path: '#',
                    title: '三级菜单',
                    subs: [
                        {
                            path: 'tpl/editor',
                            title: '富文本编辑器'
                        },
                        {
                            path: 'tpl/markdown',
                            title: 'markdown编辑器'
                        },
                    ]
                },
                {
                    path: 'tpl/upload',
                    title: '文件上传'
                }
            ]
        },
        {
            icon: 'el-icon-s-promotion',
            path: 'tpl/icon',
            title: '自定义图标'
        },
        {
            icon: 'el-icon-finished',
            path: 'tpl/charts',
            title: 'schart图表'
        },
        {
            icon: 'el-icon-rank',
            path: '#',
            title: '拖拽组件',
            subs: [
                {
                    path: 'tpl/drag',
                    title: '拖拽列表',
                },
                {
                    path: 'tpl/dialog',
                    title: '拖拽弹框',
                }
            ]
        },
        {
            icon: 'el-icon-medal-1',
            path: 'tpl/i18n',
            title: '国际化功能'
        },
        {
            icon: 'el-icon-s-release',
            path: '#',
            title: '错误处理',
            subs: [
                {
                    path: 'tpl/permission',
                    title: '权限测试'
                },
                {
                    path: 'tpl/404',
                    title: '404页面'
                }
            ]
        },
        {
            icon: 'el-icon-s-custom',
            path: 'tpl/donate',
            title: '支持作者'
        }
    ]
}

export {
    topMenuMap,
    slider
}