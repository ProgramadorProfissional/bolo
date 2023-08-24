$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fas fa-times');
        $('.navigate').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function()
    {
        $('#menu').removeClass('fas fa-times');
        $('.navigate').removeClass('nav-toggle');
    });

    $('.service .cake-list .btn1').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        let src = $(this).attr('data-src');
        $('#cake-img').attr('src', src);
    });

});