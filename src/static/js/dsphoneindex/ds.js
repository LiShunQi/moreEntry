/**
 * Created by lsq on 2017/12/8.
 */
require('../../fonts/iconfont.css');
require('../../css/dsphoneindex/ds.css');

$(function () {
    $('.disabled-bg').on('click',function () {
        $('#notice').show();
        $('body,html').css({'height':'100%','overflow':'hidden'});
    });
    $('#close-icon').on('click',function () {
        $('#notice').hide();
        $('body,html').css({'height':'','overflow':''});
    });
    $("#nsrxxcx").click(function(){
        window.location.href = '/app/query/registerInfo.html'
    });

    $("#dzjkpzcx").click(function(){
        window.location.href = '/app/query/dzjkpzcx.html'
    })

    $("#ico-ds-index").click(function(){
        try{
            if(zsbsSDK){
                zsbsSDK.back();
            }
        }catch (e){
            console.log(e);
        }

    })

});
