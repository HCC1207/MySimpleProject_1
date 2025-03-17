$(document).ready(function () {
    $(".list-close").click(function () {
        var w = $(window).width(); //得到視窗大小
        //如果是手機螢幕
        if (w <= 767) {
            $("nav").addClass("x");
            // $("nav").fadeOut();
            // $("nav").slideToggle();

            $('.path').removeClass('x');
        }
    })

    $(".menu_btn").click(function () {
        var w = $(window).width();
        if (w <= 767) {
            $("nav").toggleClass("x");
            // $("nav").fadeIn();
            // $("nav").slideToggle();

            $('.path').toggleClass('x');
        }
    })

    $('div').not(".header").click(function () { 
        var w = $(window).width();
        if (w <= 767) {
            $("nav").addClass("x");
            $('.path').removeClass('x');
        }
    })
})