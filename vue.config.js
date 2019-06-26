module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                target:'http://cms.laravel.com/admin',
                changeOrigin:true,
                pathRewrite:{
                    '^/api?':'/'
                }
            },
        }
    }
}