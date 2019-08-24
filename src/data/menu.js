
//顶级菜单
const topMenuMap = [
    {key:'index',name:'首页'},
    {key:'user',name:'人才'},
    {key:'enterprise',name:'企业'},
    {key:'school',name:'高校'},
    {key:'content',name:'内容'},
    {key:'sys',name:'系统'},
    {key:'tool',name:'工具'},
];
//子菜单
const slider = {
    index: [
        {
            icon: 'el-icon-lx-home',
            index: 'dashboard',
            title: '管理中心面板'
        }
    ],
    user: [
        {
            icon: 'el-icon-lx-cascades',
            index: 'table',
            title: '基础表格'
        }
    ],
    sys: [
        {
            icon: 'el-icon-lx-calendar',
            index: 'sys-1',
            title: '分类管理',
            subs: [
                {
                    index: 'form',
                    title: '地区分类'
                },
                {
                    index: 'form',
                    title: '职位分类'
                },
                {
                    index: 'form',
                    title: '其他分类组'
                }
            ]
        },
    ],
    tool:[
        {
            icon: 'el-icon-lx-cascades',
            index: 'table',
            title: '基础表格'
        },
        {
            icon: 'el-icon-lx-copy',
            index: 'tabs',
            title: 'tab选项卡'
        },
        {
            icon: 'el-icon-lx-calendar',
            index: '3',
            title: '表单相关',
            subs: [
                {
                    index: 'form',
                    title: '基本表单'
                },
                {
                    index: '3-2',
                    title: '三级菜单',
                    subs: [
                        {
                            index: 'editor',
                            title: '富文本编辑器'
                        },
                        {
                            index: 'markdown',
                            title: 'markdown编辑器'
                        },
                    ]
                },
                {
                    index: 'upload',
                    title: '文件上传'
                }
            ]
        },
        {
            icon: 'el-icon-lx-emoji',
            index: 'icon',
            title: '自定义图标'
        },
        {
            icon: 'el-icon-pie-chart',
            index: 'charts',
            title: 'schart图表'
        },
        {
            icon: 'el-icon-rank',
            index: '6',
            title: '拖拽组件',
            subs: [
                {
                    index: 'drag',
                    title: '拖拽列表',
                },
                {
                    index: 'dialog',
                    title: '拖拽弹框',
                }
            ]
        },
        {
            icon: 'el-icon-lx-global',
            index: 'i18n',
            title: '国际化功能'
        },
        {
            icon: 'el-icon-lx-warn',
            index: '7',
            title: '错误处理',
            subs: [
                {
                    index: 'permission',
                    title: '权限测试'
                },
                {
                    index: '404',
                    title: '404页面'
                }
            ]
        }
        ,
        {
            icon: 'el-icon-lx-redpacket_fill',
            index: '/donate',
            title: '支持作者'
        }
    ]
}

export {
    topMenuMap,
    slider
}