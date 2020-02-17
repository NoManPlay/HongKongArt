$('#slidershow').carousel({
    pause: true,
    interval: false
});

$("#slidershow").on("touchstart", function (e) {
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            // e.preventDefault();
        }
    }
    startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
});
$("#slidershow").on("touchend", function (e) {
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            // e.preventDefault();
        }
    }
    moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        X = moveEndX - startX,
        Y = moveEndY - startY;
    //左滑
    if (X > 100) {
        // alert('左滑');
        $('#slidershow').carousel('prev');
    }
    //右滑
    else if (X < -100) {
        // alert('右滑');
        $('#slidershow').carousel('next');
    }
    //下滑
    else if (Y > 0) {
        // alert('下滑');
    }
    //上滑
    else if (Y < 0) {
        // alert('上滑');
    }
    //单击
    else {
        // alert('单击');
    }
});

$(window).resize(function () {
    var w = $(window).width();
    var h = $(window).height();
    if (w < h) {
        $('.msg-wrap').css({
            "display": "block"
        });

        $('.img-left').css({
            "width": "60%",
            "margin": "0 auto"
        });
        $('.msg-right').css({
            "width": "80%",
            "margin": "5% auto"
        });
    }
});