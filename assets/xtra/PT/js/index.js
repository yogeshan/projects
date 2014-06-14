$(function() {
    $(".prclist").hover(function() {
        $(".prclist").removeClass("current");
        $(this).toggleClass("current");
    },function(){
        $(".prclist").removeClass("current");
    });
});