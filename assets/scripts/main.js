$(document).ready(function () {

    var scrolling,
        scrollUp,
        scrollDown,
        scrollPosition;

    // Animate hamburger menu on click
    $('header div div:nth-child(2) div').click(function () {
        $(this).toggleClass('animate');
        $('nav').toggleClass('show');
    });

    // Hide navigation and set humburger menu
    // to default on window resize
    $(window).resize(function () {
        $('header div div:nth-child(2) div').removeClass('animate');
        $('nav').removeClass('show');
    });

    // Show and hide menu on window scroll
    $(window).scroll(function () {
        $('header div div:nth-child(2) div').removeClass('animate');
        $('nav').removeClass('show');
        if (scrollUp) {
            $('header').fadeIn('fast');
        } else {
            $('header').slideUp('fast');
        }
    });

    // Display red navigation when scroll position
    // is greater than sell section
    $(window).scroll(function () {
        if (scrollUp && $(window).scrollTop() < $(window).height() - $('header').height()) {
            $('header').removeClass('red');
        } else if(scrollDown && $(window).scrollTop() > $(window).height()) {
            $('header').addClass('red');
        }
    });

    // Detect scroll & scroll direction
    (function () {
        var previousScroll = 0;
        $(window).scroll(function () {
            var currentScroll = $(this).scrollTop(),
                scrollPosition = currentScroll;
            scrolling = true;
            if (currentScroll > previousScroll) {
                scrollUp = false;
                scrollDown = true;
            } else {
                scrollUp = true;
                scrollDown = false;
            }
            previousScroll = currentScroll;
            console.log('scroll pos = ' + scrollPosition);
            console.log('window height = ' + $(window).height());
        });
    }());

});
