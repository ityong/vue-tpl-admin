
const isProduction = process.env.NODE_ENV === 'production';

//const path = require("path");
//引入gzip压缩插件
const CompressionPlugin = require('compression-webpack-plugin');

//js|css压缩
const TerserPlugin = require('terser-webpack-plugin');

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
                //gzip压缩配置
                new CompressionPlugin({
                    test:/\.js$|\.html$|\.css/,//匹配文件名
                    threshold:10240,//对超过10kb的数据进行压缩
                    deleteOriginalAssets:false,//是否删除原文件
                })
            );
            //js|css压缩
            config.optimization.minimizer.push(
                new TerserPlugin({
                    chunkFilter: (chunk) => {
                        // Exclude uglification for the `vendor` chunk
                        if (chunk.name === 'vendor') {
                            return false;
                        }
                        return true;
                    }
                })
            );

        }
    },
}