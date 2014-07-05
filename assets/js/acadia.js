$(window).scroll(function(){
    if($(this).scrollTop()<$(window).height()-300){
        $('header').removeClass('small');
    }else{
        $('header').addClass('small');
    }
});
            
$('.drop-down').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    if($(this).closest('li').hasClass('visible-mobile')){
        $('#navBaba>li.visible-mobile').removeClass('visible-mobile');
    }else{
        $('#navBaba>li.visible-mobile').removeClass('visible-mobile');
        $(this).closest('li').addClass('visible-mobile');
    }
               
});

