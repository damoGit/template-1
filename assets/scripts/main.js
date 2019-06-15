$(document).ready(function () {

    var scrolling,
        scrollUp,
        scrollDown;

    // Navigation toggle classes
    $('header div div:nth-child(2) div').click(function () {
        $(this).toggleClass('animate');
        $('nav').toggleClass('show');
    });

    // Navigation handle window resizing
    $(window).resize(function () {
        $('header div div:nth-child(2) div').removeClass('animate');
        $('nav').removeClass('show');
    });

    //
    $(window).scroll(function () {
        $('header div div:nth-child(2) div').removeClass('animate');
        $('nav').removeClass('show');
        if (scrollUp) {
            $('header').fadeIn('fast');
        } else {
            $('header').fadeOut('fast');
        }
    });

    // Detect scroll & scroll direction
    (function () {
        var previousScroll = 0;
        $(window).scroll(function () {
            var currentScroll = $(this).scrollTop();
            scrolling = true;
            if (currentScroll > previousScroll) {
                scrollUp = false;
                scrollDown = true;
            } else {
                scrollUp = true;
                scrollDown = false;
            }
            previousScroll = currentScroll;
        });
    }());

});
