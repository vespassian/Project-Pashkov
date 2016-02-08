var $html_button = $("#button_html");
var $css_button = $("#button_css");
var $browser_button = $("#button_browser");
var $browser_button_big = $("#button_browser_big");
var $button_browser_max = $("#button_browser_max");
var $button_yes_max = $("#button_yes_max");
var $browser_close = $("#code_browser .close");
var $left_button = $("#button_left");
var $center_button = $("#button_center");
var $right_button = $("#button_right");

var $html_element = $("#code_html");
var $css_element = $("#code_css");
var $browser_element = $("#code_browser");
var $left = $("#left");
var $theory = $("#theory");
var $theory_title = $("#theory .title");
var $theory_content = $("#theory .content");
var $adv = $("#adv");
var $adv_link = $("#adv_link");
var $center = $("#center");
var $right = $("#right");
var $code = $("#code");

var $html = $("#html");
var $css = $("#css");

$css_element.css("display", "none");
$browser_element.css("display", "none");

// Если урок по CSS, то показываем основное поле CSS
var url = location.pathname;
url = url.split('/');
url = url[2];
if (url == 'lessons-css') {
    $html_element.css("display", "none");
    $css_element.css("display", "block");
    $browser_element.css("display", "none");
}

function howToHide($html, $css, $browser) {
    $html_element.css("display", $html);
    $css_element.css("display", $css);
    $browser_element.css("display", $browser);
}

$html_button.css('background', '#d5d5d5');
$html_button.css('pointer', 'default');

$html_button.click(function(){
    $html_button.css('background', '#d5d5d5');
    $html_button.css('pointer', 'default');
    $css_button.css('background', '#FFFFFF');
    $css_button.css('pointer', 'pointer');
    $browser_button.css('background', '#FFFFFF');
    $browser_button.css('pointer', 'pointer');
    howToHide("block", "none", "none");
});

$css_button.click(function(){
    howToHide("none", "block", "none");
    $html_button.css('background', '#FFFFFF');
    $html_button.css('pointer', 'pointer');
    $css_button.css('background', '#d5d5d5');
    $css_button.css('pointer', 'default');
    $browser_button.css('background', '#FFFFFF');
    $browser_button.css('pointer', 'pointer');
    $browser_element.animate({
        width: ($code.width()),
        height: ($code.height()),
        marginTop: '0'
    }, 200);
});

$browser_button.click(function(){
    howToHide("none", "none", "block");
    $html_button.css('background', '#FFFFFF');
    $html_button.css('pointer', 'pointer');
    $css_button.css('background', '#FFFFFF');
    $css_button.css('pointer', 'pointer');
    $browser_button.css('background', '#d5d5d5');
    $browser_button.css('pointer', 'default');
    $browser_element.animate({
        width: ($code.width()),
        height: ($code.height()),
        marginTop: '0'
    }, 200);
});

var height_theory = $('#theory').height();

/* лево */
$left_button.click(function(){
    if ($left_button.attr('class') == 'open margin_bottom nopress') {
        $left_button.toggleClass('nopress');
        $center_button.toggleClass('nopress');
        $right_button.toggleClass('nopress');
        $browser_element.animate({width: (0), height: (0)}, 0);
        $right.animate({width: (0)}, 300);
        $left.animate({width: (0)}, 300);
        $left.animate({width: 'hide'}, 400);
        $right.animate({width: 'show'}, 800);
        $center.animate({marginLeft: '0'}, "slow");
        $right.animate({width: ($(window).width() - 55), float: 'right'}, 900);
        howToHide("block", "none", "none");

        $left_button.attr('class', 'open margin_bottom');
        $center_button.attr('class', 'open margin_bottom center nopress');
        $right_button.attr('class', 'open nopress');

        $html.animate({width: ($(window).width() - 55)}, 0);
        $css.animate({width: ($(window).width() - 55)}, 0);

        $button_browser_max.css('display', 'none');
        $browser_button_big.css('width', 'calc(115px)');

        createEditor();
    }
});

$center_button.click(function(){
    if ($center_button.attr('class') == 'open margin_bottom center nopress') {
        if ($('#what_is').css('display') == 'none') {
            $('#theory').animate({height: (height_theory) + 'px'}, 0);
            $('#what_is').css('display', 'block');
        }

        $browser_element.animate({width: (0), height: (0)}, 0);
        $right.animate({width: (0)}, 300);
        $left.animate({width:  (0)}, 300);
        $left.animate({width:  'show'}, 400);
        $right.animate({width: 'show'}, 400);
        $center.animate({marginLeft: '5'}, 400);
        $left.animate({width: (728)}, 1000);
        $right.animate({width: ($(window).width() - 728 - 60)}, 300);
        howToHide("block", "none", "none");

        $left_button.attr('class', 'open margin_bottom nopress');
        $center_button.attr('class', 'open margin_bottom center');
        $right_button.attr('class', 'open nopress');

        $button_browser_max.css('display', 'block');
        $browser_button_big.css('width', 'calc(47px)');

        $html.animate({width: ($(window).width() - 728 - 55 - 5)}, 0);
        $css.animate({width: ($(window).width() - 728 - 55 - 5)}, 0);
        createEditor();
    }
});

// вправо
$right_button.click(function(){
    if ($right_button.attr('class') == 'open nopress') {
        $('#theory').animate({height: (height_theory + 95) + 'px'}, 0);
        $('#what_is').css('display', 'none');
        $left_button.toggleClass('nopress');
        $center_button.toggleClass('nopress');
        $right_button.toggleClass('nopress');
        $browser_element.animate({width: (0), height: (0)}, 0);
        $right.animate({width: (0)}, 300);
        $left.animate({width: (0)}, 300);
        $right.animate({width: 'hide'}, 400);
        $left.animate({width: 'show'}, 500);
        $center.animate({marginLeft: '5'}, "slow");
        $left.animate({width: ($(window).width() - 55), float: 'left'}, "slow");

        $button_browser_max.css('display', 'block');
        $browser_button_big.css('width', 'calc(47px)');

        $left_button.attr('class', 'open margin_bottom nopress');
        $center_button.attr('class', 'open margin_bottom center nopress');
        $right_button.attr('class', 'open');
    }
});

$browser_button_big.click(function(){
    $browser_element.animate({width: (0), height: (0)}, 0);
    $html_element.css("display", "none");
    $css_element.css("display", "none");
    $browser_element.css("display", "block");
    $browser_close.css("display", "block");
    $browser_element.css("position", "absolute");
    $browser_element.animate({
        zIndex: '99999999999999999',
        width: ($(window).width() - 10),
        height: ($(window).height() - 112),
        left: '5',
        marginTop: '-38px'
    }, 400);
});

$browser_close.click(function() {
    $browser_element.animate({
        width: (0),
        height: (0)
    }, 0);
    $html_element.css("display", "none");
    $css_element.css("display", "none");
    $browser_close.css("display", "none");
    $browser_element.css("display", "block");
    $browser_element.css("position", "static");
    $browser_element.animate({
        width: ($code.width()),
        height: ($code.height()),
        marginTop: '0'
    }, 0);
});

$(document).keydown(function(e) {
    if (e.keyCode === 27 && parseInt($('#browser').height()) != 0) {
        $browser_element.animate({
            width: (0),
            height: (0)
        }, 0);
        $html_element.css("display", "none");
        $css_element.css("display", "none");
        $browser_close.css("display", "none");
        $browser_element.css("display", "block");
        $browser_element.css("position", "static");
        $browser_element.animate({
            width: ($code.width()),
            height: ($code.height()),
            marginTop: '0'
        }, 0);

        return false;
    }
});

// 08.06.2015
$button_browser_max.click(function() {
    howToHide("block", "block", "block");
    $('#no_max').css("display", "none");
    $('#yes_max').css("display", "block");
    $html_element.css({
        'position': 'absolute',
        'width': '773px',
        'height': 'calc(50% - 108px / 2 - 5px)',
        'left': '5px',
        'top': '107px'
    });

    $html.css({
        'width': '773px'
    });

    $css_element.css({
        'position': 'absolute',
        'width': '773px',
        'height': 'calc(50% - 108px / 2 - 5px)',
        'left': '5px',
        'top': 'calc(50% + 3px + 45px)',
        'border-top': '5px solid ' + $('#area').css('background-color'),
        'border-bottom': '5px solid ' + $('#area').css('background-color')
    });

    $css.css({
        'width': '773px'
    });

    createEditor();
});

$button_yes_max.click(function() {
    howToHide("block", "none", "none");
    $('#no_max').css("display", "block");
    $('#yes_max').css("display", "none");

    $html.css({
        'width': '100%'
    });

    $html_element.css({
        'position': 'static',
        'width': '100%',
        'height': 'calc(100%)'
    });

    $css.css({
        'width': '100%'
    });

    $css_element.css({
        'position': 'static',
        'width': '100%',
        'height': 'calc(100%)',
        'border': '0'
    });

    createEditor();
});

// Курсы
var select_course = $('#select_course');
var choose_lesson = $('#choose_lesson');
choose_lesson.click(function() {
    if ($('#coment_course').css('display') === 'none') {
        if (select_course.css('display') === 'block') {
            $('#content').css({
                'margin': '0 0 0 5px'
            });
            select_course.css({
                'display': 'none',
                'right': '5px'
            });
        }
        else {
            $('#content').css({
                'margin': '0 0 0 -728px'
            });
            select_course.css({
                'display': 'block',
                'right': '5px'
            });
        }
    }
});

// оценка урока
var star_lesson_block = $('#star_lesson_block');
var star_lesson = $('#star_lesson');
url = location.pathname;
star_lesson.click(function() {
    $(this).find('.text').text(Lang.header.like);
    star_lesson.css('pointer-events', 'none');
    set_like(); // инк лайк
});
if (localStorage.getItem('like:'+ url)) {
    star_lesson.find('.text').text(Lang.header.like_add);
    star_lesson.css('pointer-events', 'none');
}

// коменты
var coment_course = $('#coment_course');
var choose_kament = $('#choose_kament');
choose_kament.click(function() {
    if ($('#select_course').css('display') === 'none') {
        if (coment_course.css('display') === 'block') {
            $('#content').css({
                'margin': '0 0 0 5px'
            });
            coment_course.css({
                'display': 'none',
                'right': '5px'
            });
        }
        else {
            create_adv_comment();
            $('#content').css({
                'margin': '0 0 0 -728px'
            });
            coment_course.css({
                'display': 'block',
                'right': '5px'
            });
        }
    }
});

// закрыть вкладки хедера ескейпом
$(document).keydown(function(e) {
    if (e.keyCode === 27) {
        if ($('#select_course').css('display') == 'block') {
            $('#content').css({
                'margin': '0 0 0 5px'
            });
            $('#select_course').css({
                'display': 'none',
                'right': '5px'
            });
        }

        if ($('#coment_course').css('display') == 'block') {
            $('#content').css({
                'margin': '0 0 0 5px'
            });
            $('#coment_course').css({
                'display': 'none',
                'right': '5px'
            });
        }
    }
});

// кнопка "развернуть задание"
var arrow_size = $('#arrow_size');
var job = $('#job');
arrow_size.click(function() {
    if (($right.height() - 3) != job.height()) {
        job.css({
            'height': ($right.height() - 3) + 'px',
            'width': $right.width() + 'px',
            'z-index': '999999999',
            'position': 'absolute',
            'top': '107px'
        });

        arrow_size.css({
            'background': 'url("/img/site/arrow_bottom.png")',
            'background-size': 'cover'
        });

        arrow_size.attr('title', Lang.course.hide_job);
    }
    else {
        job.css({
            'height': ($right.height() - $code.height() - 46 - 33 - 5) + 'px',
            'width': $right.width() + 'px',
            'z-index': '999999999',
            'position': 'static',
            'top': ($code.height() + 140) + 'px'
        });

        arrow_size.css({
            'background': 'url("/img/site/arrow_top.png")',
            'background-size': 'cover'
        });

        arrow_size.attr('title', Lang.course.show_job);
    }
});

// Восстановить код
$('#delete_code').click(function() {
    html.setValue(''); css.setValue('');
    localStorage.removeItem("htmlcode"+idLess);
    var url = location.pathname;
    window.location.href = url;
});