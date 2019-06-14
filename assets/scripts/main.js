$(document).ready(function () {
    
    $('header div div:nth-child(2) div').click(function () {
        $(this).toggleClass('open');
        $('nav').toggleClass('show');
    });
    //Navigation handle window resizing
    $(window).resize(function(){
        $('header div div:nth-child(2) div').removeClass('open');
        $('nav').removeClass('show');
    });
});
