// счетчик внизу страницы
var number_mat = 0;
number_mat += + $('#stata .item.n1 .number').text();
number_mat += + $('#stata .item.n2 .number').text();
number_mat += + $('#stata .item.n3 .number').text();
number_mat += + $('#stata .item.n4 .number').text();
number_mat = String(number_mat);

if (number_mat.substr(-1) == 0) {
    number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' материалов';
} else if ((number_mat.substr(-1) == 1) && (number_mat.substr(-2) != 11)) {
    number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' материал';
} else if (((number_mat.substr(-1) == 2) || (number_mat.substr(-1) == 3) || (number_mat.substr(-1) == 4)) && (number_mat.substr(-2) != 12) && (number_mat.substr(-2) != 13) && (number_mat.substr(-2) != 14)) {
    number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' материала';
} else {
    number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' материалов';
}

$('#metrika .item.n4').html(number_mat);

// получаем кол-во юзеров
if (!sessionStorage.getItem("get_number_user")) {
    $.ajax({
        url: "/ajax/index/metrika.php",
        type: "POST",
        data: {'return_user': true},
        cache: false,
        success: function (number_mat) {
            sessionStorage.setItem("get_number_user", number_mat);

            if (number_mat.substr(-1) == 0) {
                number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' пользователей';
            } else if ((number_mat.substr(-1) == 1) && (number_mat.substr(-2) != 11)) {
                number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' пользователь';
            } else if (((number_mat.substr(-1) == 2) || (number_mat.substr(-1) == 3) || (number_mat.substr(-1) == 4)) && (number_mat.substr(-2) != 12) && (number_mat.substr(-2) != 13) && (number_mat.substr(-2) != 14)) {
                number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' пользователя';
            } else {
                number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' пользователей';
            }

            $('#metrika .item.n2').html(number_mat);
        }
    });
} else {
    var number_mat = sessionStorage.getItem("get_number_user");
    if (number_mat.substr(-1) == 0) {
        number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' пользователей';
    } else if ((number_mat.substr(-1) == 1) && (number_mat.substr(-2) != 11)) {
        number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' пользователь';
    } else if (((number_mat.substr(-1) == 2) || (number_mat.substr(-1) == 3) || (number_mat.substr(-1) == 4)) && (number_mat.substr(-2) != 12) && (number_mat.substr(-2) != 13) && (number_mat.substr(-2) != 14)) {
        number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' пользователя';
    } else {
        number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' пользователей';
    }

    $('#metrika .item.n2').html(number_mat);
}

// получаем кол-во выполнений
if (!sessionStorage.getItem("get_number_check")) {
    $.ajax({
        url: "/ajax/index/metrika.php",
        type: "POST",
        data: {'return_check': true},
        cache: false,
        success: function (number_mat) {
            sessionStorage.setItem("get_number_check", number_mat);

            if (number_mat.substr(-1) == 0) {
                number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' выполнений';
            } else if ((number_mat.substr(-1) == 1) && (number_mat.substr(-2) != 11)) {
                number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' выполнение';
            } else if (((number_mat.substr(-1) == 2) || (number_mat.substr(-1) == 3) || (number_mat.substr(-1) == 4)) && (number_mat.substr(-2) != 12) && (number_mat.substr(-2) != 13) && (number_mat.substr(-2) != 14)) {
                number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' выполнения';
            } else {
                number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' выполнений';
            }

            $('#metrika .item.n3').html(number_mat);
        }
    });
} else {
    var number_mat = sessionStorage.getItem("get_number_check");
    if (number_mat.substr(-1) == 0) {
        number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' выполнений';
    } else if ((number_mat.substr(-1) == 1) && (number_mat.substr(-2) != 11)) {
        number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' выполнение';
    } else if (((number_mat.substr(-1) == 2) || (number_mat.substr(-1) == 3) || (number_mat.substr(-1) == 4)) && (number_mat.substr(-2) != 12) && (number_mat.substr(-2) != 13) && (number_mat.substr(-2) != 14)) {
        number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' выполнения';
    } else {
        number_mat = '<div class = "number">' + (number_mat.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + '</div>' + ' выполнений';
    }

    $('#metrika .item.n3').html(number_mat);
}

// перемещение к описанию сайта
$('#about_anchor').click(function() {
    var top = $('#about').offset().top - 5;
    $('body').animate({scrollTop: top}, 1500);
});

// перемещение к HTML урокам
$('#stata_button_html').click(function() {
    var top = $('#index_title_course_all').offset().top - 5;
    $('body').animate({scrollTop: top}, 1500);
});

// перемещение к js урокам
$('#stata_button_jscr').click(function() {
    var top = $('#index_title_course_all_js').offset().top - 5;
    $('body').animate({scrollTop: top}, 1500);
});

// перемещение к доп урокам
$('#stata_button_addi').click(function() {
    var top = $('#index_title_course_all_additionally').offset().top - 5;
    $('body').animate({scrollTop: top}, 1500);
});

// перемещение к блогу
$('#stata_button_blog').click(function() {
    var top = $('#index_title_course_all_blog').offset().top - 5;
    $('body').animate({scrollTop: top}, 1500);
});

/* если пользователь не авторизован, то не отображаем кол-во процентов у курсов */
if (!$.cookie('id')) {
    //$('#element_course .post .item').css('width', 'calc(100% - 10px)');
    var diff_height = $('#element_course .post .item.co').height();
    $('#element_course .post .item.co').css('display', 'none');
    $('#element_course .post').css('height', ($('#element_course .post').height() - diff_height - 9) + 'px');
    $('#element_course .post').css('margin-bottom', '6px');
}

/* ajax получить ключ и в инпат */
$('#passage_save').click(function() {
    var locale_passage = localStorage.getItem("progress_html");

    $.ajax({
        url: "/ajax/ajax_passage.php",
        type: "POST",
        data:{'passage_add_key': true, 'passage_locale': locale_passage},
        cache: false,
        success: function(html){
            $('#passage input').val(html);
        }
    });
});

/* восстановить прогресс */
$('#passage_restore').click(function() {
    var passage_input = $('#passage input').val();

    $.ajax({
        url: "/ajax/ajax_passage.php",
        type: "POST",
        data:{'passage_restore_key': true, 'passage_input': passage_input},
        cache: false,
        success: function(html){
            localStorage.setItem("progress_html", html);
            location.href = 'http://' + location.hostname;
        }
    });
});

/* ссылки в курсах не внешние сайты */
if ($(window).width() < 1024) {
    var lenght_arr_link_course = $('#element_course a').length;
    for (var i = 1; i <= lenght_arr_link_course; i++) {
        if ($('#element_course a:nth-of-type(' + i + ')').data('link')) {
            $('#element_course a:nth-of-type(' + i + ')').css('display', 'none');
        }
    }
}

/* что-то там */
var text_but_switch = $('#switch_post').text();
$('#switch_post').click(function() {
    if ($('#element_lesson').css('display') === 'none') {
        $('#element_lesson').css('display', 'block');
        $('#element_course').css('display', 'none');
        $('#switch_post').text(Lang.index.switch_post);
    } else {
        $('#element_lesson').css('display', 'none');
        $('#element_course').css('display', 'block');
        $('#switch_post').text(text_but_switch);
    }
});

var text_but_switch_js = $('#switch_post_js').text();
$('#switch_post_js').click(function() {
    if ($('#element_lesson_js').css('display') === 'none') {
        $('#element_lesson_js').css('display', 'block');
        $('#element_course_js').css('display', 'none');
        $('#switch_post_js').text(Lang.index.switch_post);
    } else {
        $('#element_lesson_js').css('display', 'none');
        $('#element_course_js').css('display', 'block');
        $('#switch_post_js').text(text_but_switch_js);
    }
});

var text_but_switch_blog = $('#switch_post_blog').text();
$('#switch_post_blog').click(function() {
    if ($('#element_lesson_blog').css('display') === 'none') {
        $('#element_lesson_blog').css('display', 'block');
        $('#element_course_blog').css('display', 'none');
        $('#switch_post_blog').text(Lang.index.switch_post_blog);
    } else {
        $('#element_lesson_blog').css('display', 'none');
        $('#element_course_blog').css('display', 'block');
        $('#switch_post_blog').text(text_but_switch_js);
    }
});

var text_but_switch_additionally = $('#switch_post_additionally').text();
$('#switch_post_additionally').click(function() {
    if ($('#element_lesson_additionally').css('display') === 'none') {
        $('#element_lesson_additionally').css('display', 'block');
        $('#element_course_additionally').css('display', 'none');
        $('#switch_post_additionally').text(Lang.index.switch_post);
    } else {
        $('#element_lesson_additionally').css('display', 'none');
        $('#element_course_additionally').css('display', 'block');
        $('#switch_post_additionally').text(text_but_switch_additionally);
    }
});


var html_progress_item;
var html_progress = localStorage.getItem("progress_html");
html_progress = SaveProgress.split_progress(html_progress);

for (var j = 1; j <= $('#element_lesson a span').length; j++) {
    for (var i = 0; i < html_progress.length; i++) {
        html_progress_item = html_progress[i].split(':');
        if (html_progress_item[0] == $('#element_lesson a:nth-of-type('+ j +') .name').data('course')) {
            if (html_progress_item[1] == $('#element_lesson a:nth-of-type('+ j +') .name').data('lesson')) {
                $('#element_lesson a:nth-of-type('+ j +') .check').attr('class', 'check true');
                $('#element_lesson a:nth-of-type('+ j +') .check').html('&#10003;');
            }
        }
    }
}

// для js
for (var j = 1; j <= $('#element_lesson_js a span').length; j++) {
    for (var i = 0; i < html_progress.length; i++) {
        html_progress_item = html_progress[i].split(':');
        if (html_progress_item[0] == $('#element_lesson_js a:nth-of-type('+ j +') .name').data('course')) {
            if (html_progress_item[1] == $('#element_lesson_js a:nth-of-type('+ j +') .name').data('lesson')) {
                $('#element_lesson_js a:nth-of-type('+ j +') .check').attr('class', 'check true');
                $('#element_lesson_js a:nth-of-type('+ j +') .check').html('&#10003;');
            }
        }
    }
}