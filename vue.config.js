
const isProduction = process.env.NODE_ENV === 'production';

//const path = require("path");
//引入gzip压缩插件
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    publicPath: '/',
    assetsDir: 'static',
    productionSourceMap: false,

    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'http://xxxx.com',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':''
    //             }
    //         }
    //     }
    // },
    chainWebpack: config => {
        if (isProduction) {
            // 移除 prefetch 插件
            config.plugins.delete('prefetch')
            // 移除 preload 插件
            config.plugins.delete('preload');
        }
    },
    configureWebpack: config => {

        // 为生产环境修改配置...
        if (isProduction) {
            config.plugins.push(
                new CompressionPlugin({//gzip压缩配置
                    test:/\.js$|\.html$|\.css/,//匹配文件名
                    threshold:10240,//对超过10kb的数据进行压缩
                    deleteOriginalAssets:false,//是否删除原文件
                })
            );
        }
    },
}