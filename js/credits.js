$(window).resize(function () {
    var left = $(".sup1").offset().left;
    var w = $(window).width();
    var h = $(window).height();
    $(".sup-title").css({
        "margin-left": left + "px"
    });

    if (w <= 1020) {
        $('.fr').removeClass("fright");
    } else {
        $('.fr').addClass("fright");
    }
});