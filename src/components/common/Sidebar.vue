<template>
    <div class="sidebar">
        <el-menu
                class="sidebar-el-menu"
                :default-active="nowShowRouteIndex"
                :collapse="collapse"
                text-color="#bfcbd9"
                background-color="#324157"
                active-text-color="#20a0ff"
        >
            <template v-for="(item,i) in items">
                <el-menu-item v-if="!item.subs" :index="`${i}`" @click="pathUrl(item.path,`${i}`)">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
                <el-submenu v-else :index="`${i}`">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.title}}</span>
                    </template>
                    <template v-for="(item2,j) in item.subs">
                        <el-menu-item-group  v-if="!item2.subs">
                            <el-menu-item :index="`${i}-${j}`" @click="pathUrl(item2.path,`${i}-${j}`)">{{item2.title}}</el-menu-item>
                        </el-menu-item-group>

                        <el-submenu v-else :index="`${i}-${j}`">
                            <span slot="title">{{item2.title}}</span>
                            <el-menu-item v-for="(item3,k) in item2.subs"
                                          @click="pathUrl(item3.path,`${i}-${j}-${k}`)"
                                          :index="`${i}-${j}-${k}`"
                            >{{item3.title}}</el-menu-item>
                        </el-submenu>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import {slider} from '../../conf/menu'
    export default {
        data() {
            return {
                collapse: false,
                topMenuKey: 'index',
                items: slider['index'],
                nowShowRouteIndex: 'no',
            }
        },
        methods: {
            pathUrl(path,index) {
                if (this.nowShowRouteIndex !== index && this.$router.currentRoute.fullPath != `/${path}`) {
                    this.nowShowRouteIndex = index
                    this.$router.push(`/${path}`)
                }
            },
        },
        created(){
            //监听顶部菜单变化
            this.$root.$on('topMenuChange', msg => {
                window.console.log(msg)


                this.topMenuKey = msg;
                this.items = slider[msg] || []
            })
            // 通过 Event进行组件间通信，来折叠侧边栏
            this.$root.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 200px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
