var name = "language";

function SetCookie(name, value) {
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date(); //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) //取cookies函数
{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));

    if (arr != null) return unescape(arr[2]);
    return null;
}

function i18nProperties(i18nLanguage) {
    jQuery.i18n.properties({
        name: htmlName,
        path: 'js/i18n/', //资源文件路径
        mode: 'map', //用Map的方式使用资源文件中的值
        language: i18nLanguage,
        callback: function () { //加载成功后设置显示内容
            try {
                //初始化页面元素
                $('[data-i18n-placeholder]').each(function () {
                    $(this).attr('placeholder', $.i18n.map[$(this).data('i18n-placeholder')]);
                });
                $('[data-i18n-text]').each(function () {
                    //如果text里面还有html需要过滤掉
                    var html = $(this).html();
                    var reg = /<(.*)>/;
                    if (reg.test(html)) {
                        $(this).html($.i18n.map[$(this).data('i18n-text')]);
                    } else {
                        $(this).text($.i18n.map[$(this).data('i18n-text')]);
                    }
                });
            } catch (ex) {}
        }
    });
}


function load() {
    var uulanguage = (navigator.language || navigator.browserLanguage).toLowerCase();

    unlanguage = uulanguage.indexOf("en") > -1 ? 'en' : 'zh_CN';
    if (getCookie(name) !== "") {
        unlanguage = getCookie(name) === 'en' ? 'en' : 'zh_CN';
    };

    i18nProperties(unlanguage);
}