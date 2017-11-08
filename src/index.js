/**
 * Created by lsq on 2017/10/30.
 */
// var layui = require('node_modules/layui-src');
// require('static/fonts/iconfont.css');
// require('static/font/css/font-awesome.min.css');
// require('libs/util');
require('static/css/index.css');
layui.use('layer',function () {
    var layer = layui.layer;
    $('#test').on('click',function () {
        layer.alert('index')
    })
});