import axios from 'axios';

//请求发送拦截
axios.interceptors.request.use((request) => {

    // //设置签名并进行qs转换，且赋值给request的data，签名函数另外封装
    // //发送请求给后台
    window.console.log('-------------');
    window.console.log(request);
    window.console.log('-------------');

    return request;
}, function (error) {
    // Do something with request error
    return  error
});

export default axios

