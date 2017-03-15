/**
 * Created by syf on 2017/3/13.
 */
$(function(){
    $(".bj").on("click",function(){
        $(".gb").show();
    })
    $(".jv a").on("click","span",function(){
        $(this).parent().remove();
    })
    $(".jia").on("click",function(){
        $(this).prev().clone().insertBefore($(this));
        $(".jv a").on("click","span",function(){
            $(this).parent().remove();
        })
    })
})