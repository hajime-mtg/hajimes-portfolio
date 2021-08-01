$(function(){
    $('#js-buttonHamburger').click(function (){
        $('body').toggleClass('is-drawerActive');
    
        if($(this).attr('aria-expanded') == 'false'){
            $(this).attr('aria-expanded',true);
        }else{
            $(this).attr('aria-expanded',false);
        }
    });
});

$(function(){
    $('#js-buttonHamburger').click(function (){
        $('body').toggleClass('is-drawerActive');
    
        if($('#nav').attr('aria-expanded') == 'false'){
            $('#nav').attr('aria-expanded',true);
        }else{
            $('#nav').attr('aria-expanded',false);
        }
    });
});

$(function(){
    new WOW().init();
});