var Config = {
    time_run: 5000, // время проверки
    time_job: 6, // время загрузки
    time_job_what: 25, // время без рекламы
    time_job_new_user: 5, // время проверки для новых
    bounce_job: 20, // кол-во проверок
    day_bounce_job: 7, // кол-во дней, между появлением окна "бонус соц. сетей"
    day_donation: 10, // кол-во дней, между появлением окна "пожертвование"
    delay_new_user: {
        cookie: 'delay_new_user', // название кукисов
        time: 3, // для новых пользователей задержка
        check: 25 // сколько нужно сделать проверок, чтобы задержка была обычной
    }
};

if ($('*').is('#no_income')) {
    Config.time_job_what = 3;
    Config.time_job_new_user = 3;
}

// практика для мобилок
var url = $('#left #theory').css('display');
var key = $('#header_bottom').css('display');
if (url == undefined && key != undefined && $(window).width() <= 1024) {
    if (window.location.pathname.search(/\/ru\/blog\//i) == -1) {
        $('#content').css('display', 'none');
        $('#area').css('height', ($('#area').height() - 4) + 'px');
        $('#area').css('overflow', 'hidden');
        $('#area').append(
            '<div id = "practice_mobile"><p>Чтобы выполнять практику на сайте codebra, вам нужно зайти на сайт с устройства, дисплей которого в ширину более 1024 пикселей. С устройства, у которого дисплей в ширину меньше 1024 пикселей, вы можете читать теорию.</p>' +
            '<div class = "logo"></div>' +
            '</div>'
        );

        $('#practice_mobile').css('height', ($('#practice_mobile').height() - $('#header').height() - $('#header_bottom').height()) + 'px');
    }
}

/* ajax сохранение кол-ва кликов по предложеному уроку под теорией */
$('#suggestions_add').click(function() {
    $.ajax({
        url: "/ajax/ajax_suggestions.php",
        type: "POST",
        data:{'suggestions_post': true},
        cache: false
    });
});

$('#win_create_first_visit_close').click(function() {
    $('#win_create_first_visit').css('display', 'none');
});

// убераем скролл, если есть
/* $('#content').css('display', 'none');

setTimeout(function() {
    $('#content').css('display', 'block');
    $('#loader').css('display', 'none');
}, 5000);*/

// проверяем сихронизацию с базой
if ($.cookie('id') && $.cookie('hash')) {
    if (!localStorage.getItem('synchronization_database')) {
        var progress_local = (localStorage.getItem("progress_html")) ? localStorage.getItem("progress_html") : localStorage.getItem("all_progress");
        $.ajax({
            url: "/ajax/lesson/synchronization_database.php",
            type: "POST",
            data: {'progress': progress_local},
            cache: false,
            success: function (html) {
                localStorage.setItem('synchronization_database', '1');
                localStorage.setItem('all_progress', progress_local);
                localStorage.setItem('progress_html', '');
            }
        });
    }
}

// загоняем в хранилище из базы прогресс
if ($.cookie('id') && $.cookie('hash')) {
    if (localStorage.getItem('synchronization_database_progress') !== '1') {
        $.ajax({
            url: "/ajax/lesson/synchronization_database.php",
            type: "POST",
            data: {'get_progress': true},
            cache: false,
            success: function (html) {
                localStorage.setItem('synchronization_database_progress', '1');
                localStorage.setItem('all_progress', html);
                window.location.href = location.href;
            }
        });
    }
}

// если не авторизован, чистем хранилище
/*if (!$.cookie('id')) {
    localStorage.setItem('all_progress', '');
}*/

// выделение больших фрагментов одним кликом
$('p code, li code, table code, .one_click').on('click', function() {
    var e = this;
    if (window.getSelection) {
        var s = window.getSelection();

        if (s.setBaseAndExtent) {
            s.setBaseAndExtent(e, 0, e, e.innerText.length - 1);
        }

        else {
            var r = document.createRange();
            r.selectNodeContents(e);
            s.removeAllRanges();
            s.addRange(r);
        }

    }

    else if (document.getSelection) {
        var s = document.getSelection();
        var r = document.createRange();
        r.selectNodeContents(e);
        s.removeAllRanges();
        s.addRange(r);
    }

    else if (document.selection) {
        var r = document.body.createTextRange();
        r.moveToElementText(e);
        r.select();
    }
});