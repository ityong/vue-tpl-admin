<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>tinymce5编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                只安装tinymce-vue不可以，还需安装tinymce，否则会报错<br>
                npm install tinymce<br>
                npm install @tinymce/tinymce-vue<br>
                import tinymce from 'tinymce/tinymce'<br>
                import Editor from '@tinymce/tinymce-vue'<br>
                访问地址：<a href="https://www.tiny.cloud/docs/" target="_blank">Tinymce5</a>
            </div>

            <editor id="tinymce" v-model="content" :init="editorInit"></editor>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>

    import tinymce from 'tinymce/tinymce'
    import 'tinymce/themes/silver/theme'
    import editor from '@tinymce/tinymce-vue'

    import 'tinymce/plugins/image'// 插入上传图片插件
    import 'tinymce/plugins/media'// 插入视频插件
    import 'tinymce/plugins/table'// 插入表格插件
    import 'tinymce/plugins/lists'// 列表插件
    import 'tinymce/plugins/wordcount'// 字数统计插件
    import 'tinymce/plugins/fullscreen'
    import 'tinymce/plugins/preview'

    export default {
        name: 'markdown',
        data: function(){
            return {
                content:'',
                html:'',
                editorInit: {
                    language_url: '/plugs/tinymce/langs/zh_CN.js',// 语言包的路径
                    language: 'zh_CN',//语言
                    skin_url: '/plugs/tinymce/ui/oxide',// skin路径
                    height: 300,//编辑器高度
                    branding: false,//是否禁用“Powered by TinyMCE”
                    menubar: false,//顶部菜单栏显示
                    plugins: 'lists image media table wordcount fullscreen preview',
                    toolbar: 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat',
                    // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                    // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                    images_upload_handler: (blobInfo, success, failure) => {
                        const img = 'data:image/jpeg;base64,' + blobInfo.base64()
                        success(img)
                    }
                }
            }
        },
        components: {
            editor
        },
        methods: {
            submit(){
                console.log(this.content);
                console.log(this.html);
                this.$message.success('提交成功！');
            }
        },
        mounted () {
            tinymce.init({})
        },
    }
</script>
<style scoped>
    .editor-btn{
        margin-top: 20px;
    }
</style>